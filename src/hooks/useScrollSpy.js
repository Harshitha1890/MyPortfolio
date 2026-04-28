"use client";

import { useState, useEffect } from "react";

export function useScrollSpy(ids, offset = 0) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const listener = () => {
      const scrollPosition = window.scrollY + offset;

      let currentId = "";
      for (const id of ids) {
        const element = document.getElementById(id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const absoluteTop = top + window.scrollY;
          // If the scroll position is passed the top of the element, it is the active one
          if (scrollPosition >= absoluteTop - 150) {
            currentId = id;
          }
        }
      }

      setActiveId(currentId);
    };

    window.addEventListener("scroll", listener);
    listener(); // Initial check

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [ids, offset]);

  return activeId;
}

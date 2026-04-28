"use client";

import { SectionWrapper } from "../bits/SectionWrapper";
import { Card } from "../bits/Card";
import { ProgressBar } from "../bits/ProgressBar";
import { FaReact, FaNodeJs, FaFigma, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiMongodb } from "react-icons/si";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", progress: 90, icon: <FaReact className="text-blue-500" /> },
      { name: "JavaScript", progress: 85, icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Tailwind CSS", progress: 90, icon: <SiTailwindcss className="text-teal-400" /> },
      { name: "HTML / CSS", progress: 95, icon: <FaHtml5 className="text-orange-500" /> },
    ]
  },
  {
    category: "Backend & Database",
    skills: [
      { name: "Node.js / Express.js", progress: 80, icon: <FaNodeJs className="text-green-500" /> },
      { name: "MongoDB", progress: 75, icon: <SiMongodb className="text-green-600" /> },
      { name: "SQL", progress: 70, icon: <span className="text-blue-800 font-bold">SQL</span> },
    ]
  },
  {
    category: "Tools, Core & Design",
    skills: [
      { name: "Python", progress: 85, icon: <span className="text-blue-500 font-bold">Py</span> },
      { name: "Data Structures & Algos", progress: 80, icon: <span className="text-purple-500 font-bold">{`{}`}</span> },
      { name: "Graphic Designer", progress: 30, icon: <FaFigma className="text-pink-500" /> },
      { name: "Git / GitHub", progress: 85, icon: <FaGitAlt className="text-orange-600" /> },
    ]
  }
];

export function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light mb-4">Technical <span className="font-semibold text-gradient">Expertise</span></h2>
          <div className="w-20 h-1 bg-primary-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((group, idx) => (
            <Card key={idx} hover={false} className="p-8 border-primary-100 dark:border-primary-900/30">
              <h3 className="text-xl font-medium mb-6 text-gray-800 dark:text-gray-100">{group.category}</h3>
              <div className="space-y-6">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        {skill.icon}
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-700">{skill.progress}%</span>
                    </div>
                    <ProgressBar progress={skill.progress} />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

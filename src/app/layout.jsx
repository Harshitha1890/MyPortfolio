import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Harshitha | Personal Portfolio",
  description: "Modern portfolio built with Next.js, Tailwind CSS, and Framer Motion.",
  keywords: ["portfolio", "nextjs", "react", "tailwindcss", "framer motion", "harshitha"],
  authors: [{ name: "Harshitha" }],
  openGraph: {
    title: "Harshitha | Personal Portfolio",
    description: "Modern portfolio built with Next.js, Tailwind CSS, and Framer Motion.",
    url: "https://harshitha-portfolio.com",
    siteName: "Harshitha Portfolio",
    images: [
      {
        url: "https://harshitha-portfolio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Harshitha Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-transparent`} suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

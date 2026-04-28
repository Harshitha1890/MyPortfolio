"use client";

import { SectionWrapper } from "../bits/SectionWrapper";
import { Card } from "../bits/Card";
import { IoSchoolOutline, IoBriefcaseOutline, IoCodeSlashOutline } from "react-icons/io5";

export function About() {
  return (
    <SectionWrapper id="about" className="bg-primary-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light mb-4">About <span className="font-semibold text-gradient">Me</span></h2>
          <div className="w-20 h-1 bg-primary-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-gray-800 font-light leading-relaxed">
            <p>
              I am a motivated and detail-oriented software developer with strong foundations in <strong>Python</strong>, <strong>Data Structures & Algorithms (DSA)</strong>, and <strong>Full-Stack Web Development (MERN)</strong>.
            </p>
            <p>
              I am passionate about building scalable applications, optimizing workflows, and delivering visually engaging user experiences. I enjoy building real-world projects and learning through hands-on experience.
            </p>
            <p>
              As a collaborative team player with leadership experience in group projects, I have an organized and methodical approach to coding. I am passionate about combining <strong>tech and design thinking</strong> for impactful solutions.
            </p>
          </div>

          <div className="space-y-6">
            <Card hover={false} className="flex gap-4 items-start border-primary-100">
              <div className="p-3 rounded-xl bg-primary-100/50 text-primary-600">
                <IoSchoolOutline size={24} />
              </div>
              <div>
                <h4 className="font-medium text-xl mb-1">Education</h4>
                <p className="text-gray-700 text-sm font-light">
                  Bachelor's in Computer Science<br />
                  <strong>Nxtwave Institute Of Advanced Technologies</strong> (Expected Graduation: 2027)
                </p>
              </div>
            </Card>

            <Card hover={false} className="flex gap-4 items-start border-primary-100">
              <div className="p-3 rounded-xl bg-teal-100/50 text-teal-600">
                <IoCodeSlashOutline size={24} />
              </div>
              <div>
                <h4 className="font-medium text-xl mb-1">Hackathons</h4>
                <ul className="text-gray-700 text-sm font-light list-disc list-inside space-y-1">
                  <li><strong>Build for Telangana:</strong> Collaborated on innovative solutions for regional challenges.</li>
                  <li><strong>Base44 Hackathon:</strong> Developed a scalable web application using MERN stack.</li>
                </ul>
              </div>
            </Card>

            <Card hover={false} className="flex gap-4 items-start border-primary-100">
              <div className="p-3 rounded-xl bg-emerald-100/50 text-emerald-600">
                <IoBriefcaseOutline size={24} />
              </div>
              <div>
                <h4 className="font-medium text-xl mb-1">Strengths</h4>
                <p className="text-gray-700 text-sm font-light">Organized, collaborative team player with leadership exposure and a growing interest in problem-solving.</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

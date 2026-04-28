"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "../bits/SectionWrapper";
import { Card } from "../bits/Card";
import { Modal } from "../bits/Modal";
import { Button } from "../bits/Button";
import { projects } from "../data/projects";
import { IoLogoGithub, IoOpenOutline } from "react-icons/io5";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <SectionWrapper id="projects" className="bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light mb-4">Selected <span className="font-semibold text-gradient">Works</span></h2>
          <div className="w-20 h-1 bg-primary-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <Card className="p-0 overflow-hidden group cursor-pointer h-full flex flex-col border-none" hover={false}>
                <div 
                  className="relative h-48 w-full overflow-hidden"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="absolute inset-0 bg-black/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">View Details</span>
                  </div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col bg-white/80 backdrop-blur-sm">
                  <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                  <p className="text-gray-800 text-sm font-light mb-4 line-clamp-3 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-xs px-3 py-1 bg-primary-50 text-primary-600 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs px-3 py-1 bg-primary-50 text-primary-600 rounded-full font-medium">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div>
            <div className="relative h-64 w-full rounded-xl overflow-hidden mb-6 mt-2">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-3xl font-light mb-4">{selectedProject.title}</h3>
            <p className="text-gray-800 font-light mb-6 text-lg">
              {selectedProject.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {selectedProject.tags.map(tag => (
                <span key={tag} className="text-sm px-4 py-1.5 bg-primary-50 text-primary-600 rounded-full font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button as="a" href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
                <IoLogoGithub size={20} /> Code
              </Button>
              <Button as="a" href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" variant="secondary" className="flex-1 sm:flex-none">
                <IoOpenOutline size={20} /> Live Demo
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </SectionWrapper>
  );
}

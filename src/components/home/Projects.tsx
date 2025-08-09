import React from 'react'
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ExternalLink, Github } from 'lucide-react';

function Projects() {
    
  const projects = [
    {
      title: 'E-commerce Dashboard',
      description: 'A comprehensive admin dashboard for managing products, orders, and customers with real-time analytics.',
      tech: ['React.js', 'Next.js', 'Tailwind CSS', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      github: '#',
      demo: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with drag-and-drop functionality and team features.',
      tech: ['React.js', 'TypeScript', 'CSS Modules'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
      github: '#',
      demo: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills with smooth animations.',
      tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop',
      github: '#',
      demo: '#'
    }
  ];

  return (
    <div>  <section id="projects" className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl mb-6">Featured Projects</h2>
            <p className="text-muted-foreground mb-12">
              A selection of projects that showcase my skills and experience
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  }}
                >
                  <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button size="sm" variant="outline" className="gap-2">
                            <Github className="h-3 w-3" />
                            Code
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button size="sm" className="gap-2">
                            <ExternalLink className="h-3 w-3" />
                            Demo
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section></div>
  )
}

export default Projects
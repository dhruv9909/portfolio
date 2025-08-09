import React from 'react'
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ExternalLink, Github } from 'lucide-react';

function Projects() {

  const projects = [
    {
      title: 'ShipArc',
      description: 'Frontend work in dashboard for a client to manage ships’ oil, fuel, and custom tank details efficiently.',
      tech: ['React.js', 'Next.js', 'Tailwind CSS'],
      image: 'https://plus.unsplash.com/premium_photo-1738067844091-c64a9d4f9915?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      github: '#',
      demo: '#'
    },
    {
      title: 'Ethiks360',
      description: 'Integrated Trello boards, lanes, and cards into Trello section for seamless task management.',
      tech: ['React.js', 'REST API', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=400&h=250&fit=crop',
      github: '#',
      demo: '#'
    },
    {
      title: 'E Software Solutions',
      description: 'Built the frontend with a modern, responsive design to enhance user experience and accessibility.',
      tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      github: '#',
      demo: '#'
    },
    {
      title: 'Net60',
      description: 'Implemented Payload CMS features allowing users to create pages through custom collections and admin tools.',
      tech: ['Payload CMS', 'Node.js', 'React.js'],
      image: 'https://images.unsplash.com/photo-1600267165477-6d4cc741b379?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      github: '#',
      demo: '#'
    },
    {
      title: 'Security Management',
      description: 'Designed and improved UI elements on dashboard to enhance user experience and clarity.',
      tech: ['React.js', 'Tailwind CSS', 'Figma'],
      image: 'https://plus.unsplash.com/premium_photo-1661627555496-1646ae639320?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      github: '#',
      demo: '#'
    }
  ];
  
  const remainder = projects.length%3;
  const first = remainder === 0 ? projects : projects.slice(0,projects.length - remainder) ;
  const last = remainder === 0 ? [] : projects.slice(projects.length-remainder,projects.length);

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
            {first.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  transition:{delay: 0}
                }}
              >
                <Card className="h-[428px] pt-0 flex flex-col justify-between overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  </div>
                  <div className="p-6 pb-2 flex flex-col gap-6">
                    <h3 className="text-xl">{project.title}</h3>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
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
          <div className="flex justify-center mt-10 gap-8">
            {last.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  transition:{delay: 0}
                }}
              >
                <Card className="w-full max-w-92 h-[428px] pt-0 flex flex-col justify-between overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  </div>
                  <div className="p-6 pb-2 flex flex-col gap-6">
                    <h3 className="text-xl">{project.title}</h3>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
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

export default Projects;
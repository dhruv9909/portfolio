"use client"
import { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, MapPin, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const skills = [
    'HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 
    'Tailwind CSS', 'TypeScript', 'Git', 'Responsive Design', 'UI/UX Design'
  ];

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

  const experience = [
    {
      role: 'Frontend Developer',
      company: 'IT Company',
      period: '4 months (Current)',
      type: 'Full-time',
      description: 'Working on complex web applications using React.js and Next.js. Contributing to UI/UX improvements and implementing responsive designs.'
    },
    {
      role: 'Frontend Developer Intern',
      company: 'IT Company',
      period: '4 months',
      type: 'Internship',
      description: 'Gained hands-on experience in modern frontend development. Built responsive web components and collaborated with senior developers.'
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 5,
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-semibold"
          >
            Portfolio
          </motion.div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-6">
              <motion.a 
                href="#about" 
                className="hover:text-primary transition-colors"
                whileHover={{ y: -1 }}
              >
                About
              </motion.a>
              <motion.a 
                href="#skills" 
                className="hover:text-primary transition-colors"
                whileHover={{ y: -1 }}
              >
                Skills
              </motion.a>
              <motion.a 
                href="#experience" 
                className="hover:text-primary transition-colors"
                whileHover={{ y: -1 }}
              >
                Experience
              </motion.a>
              <motion.a 
                href="#projects" 
                className="hover:text-primary transition-colors"
                whileHover={{ y: -1 }}
              >
                Projects
              </motion.a>
              <motion.a 
                href="#contact" 
                className="hover:text-primary transition-colors"
                whileHover={{ y: -1 }}
              >
                Contact
              </motion.a>
            </nav>
            <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setDarkMode(!darkMode)}
                className="p-2"
              >
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div 
              className="w-32 h-32 rounded-full bg-gradient-to-r from-primary to-primary/70 mx-auto mb-8 flex items-center justify-center text-primary-foreground text-4xl shadow-lg"
              animate={{ 
                y: [0, -10, 0],
                boxShadow: [
                  "0 10px 25px rgba(0,0,0,0.1)",
                  "0 15px 30px rgba(0,0,0,0.15)",
                  "0 10px 25px rgba(0,0,0,0.1)"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              {/*JS*/}
              <Image src="/images/dhruv" height={40} width={40} alt='Dhruv-image' />
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Frontend Developer
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Passionate frontend developer with 8 months of experience creating beautiful, 
              responsive web applications using React.js, Next.js, and modern web technologies.
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-shadow">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" className="gap-2 hover:shadow-lg transition-shadow">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" className="gap-2 hover:shadow-lg transition-shadow">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-muted/30 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl mb-6">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div 
                className="text-left"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-muted-foreground mb-4">
                  I`&apos;m a dedicated frontend developer with a strong foundation in modern web technologies. 
                  My journey began with a 4-month internship where I learned the fundamentals of React.js 
                  and JavaScript development.
                </p>
                <p className="text-muted-foreground mb-6">
                  Currently working as a full-time frontend developer for the past 4 months, I`&apos;ve been 
                  building responsive web applications, improving user experiences, and collaborating 
                  with cross-functional teams to deliver high-quality solutions.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <MapPin className="h-4 w-4" />
                    Available for Remote Work
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Calendar className="h-4 w-4" />
                    8 months experience
                  </motion.div>
                </div>
              </motion.div>
              <motion.div 
                className="bg-background p-6 rounded-lg border border-border shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="mb-4">Quick Facts</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 4 months internship experience</li>
                  <li>• 4 months full-time development experience</li>
                  <li>• Specialized in React.js and Next.js</li>
                  <li>• Passionate about clean, maintainable code</li>
                  <li>• Strong focus on user experience</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl mb-6">Technical Skills</h2>
            <p className="text-muted-foreground mb-12">
              Technologies and tools I use to bring ideas to life
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  }}
                >
                  <Badge variant="secondary" className="p-3 text-sm hover:shadow-lg transition-shadow">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl mb-6">Experience</h2>
            <p className="text-muted-foreground mb-12">
              My professional journey in frontend development
            </p>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
                >
                  <Card className="p-6 text-left shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl mb-1">{exp.role}</h3>
                        <p className="text-primary">{exp.company}</p>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{exp.type}</Badge>
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <p className="text-muted-foreground">{exp.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl mb-6">Get In Touch</h2>
            <p className="text-muted-foreground mb-12">
              I`&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { Icon: Mail, title: 'Email', content: 'your.email@example.com' },
                { Icon: Github, title: 'GitHub', content: 'github.com/yourusername' },
                { Icon: Linkedin, title: 'LinkedIn', content: 'linkedin.com/in/yourprofile' }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    >
                      <item.Icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                    </motion.div>
                    <h3 className="mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.content}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-shadow">
                <Mail className="h-4 w-4" />
                Send Message
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © 2025 Portfolio. Built with React.js and Tailwind CSS.
          </motion.p>
        </div>
      </footer>
    </div>
  );
}
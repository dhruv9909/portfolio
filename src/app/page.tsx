"use client"
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Skills from '@/components/home/Skills';
import Experience from '@/components/home/Experience';
import Projects from '@/components/home/Projects';
import Contact from '@/components/common/Contact';
import Footer from '@/components/common/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

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
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
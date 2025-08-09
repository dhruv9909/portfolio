import React from 'react'
import { motion } from 'motion/react';
import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../ui/button';

function Hero() {
  return (
    
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

  )
}

export default Hero
import React from 'react'
import { motion } from 'motion/react';
import { Calendar, MapPin } from 'lucide-react';

function About() {
  return (
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
  )
}

export default About
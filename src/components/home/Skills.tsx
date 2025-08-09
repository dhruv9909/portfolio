import React from 'react'
import { motion } from 'motion/react';
import { Badge } from '../ui/badge';

function Skills() {
    
  const skills = [
    'HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 
    'Tailwind CSS', 'TypeScript', 'Git', 'Responsive Design', 'Node.js'
  ];

  return (
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
                  <Badge variant="secondary" className="max-w-34 w-full p-3 text-sm hover:shadow-lg transition-shadow">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
  )
}

export default Skills
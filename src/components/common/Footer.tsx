import React from 'react'
import { motion } from 'motion/react';

function Footer() {
  return (
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
  )
}

export default Footer
import React from 'react'
import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';

function Contact() {
    return (
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
                            { Icon: Mail, title: 'Email', content: 'dhruvsachdeva951@gmail.com' },
                            { Icon: Github, title: 'GitHub', content: 'github.com/dhruv9909' },
                            { Icon: Linkedin, title: 'LinkedIn', content: 'linkedin.com/in/' }
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
                            <Mail to="dhruvsachdeva951@gmail.com" className="h-4 w-4" />
                            Send Message
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
import React from 'react'
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';

function Experience() {

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
    )
}

export default Experience
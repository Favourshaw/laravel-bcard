import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export interface NavProps {
    skills?: string[];
}

const Skills: React.FC<NavProps> = ({ skills }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const skillCategories = [
        {
            title: 'FRONTEND.js',
            skills: [
                { name: 'React', level: 95 },
                { name: 'TypeScript', level: 90 },
                { name: 'Next.js', level: 85 },
                { name: 'Tailwind CSS', level: 92 },
            ],
            color: 'cyan',
        },
        {
            title: 'BACKEND.py',
            skills: [
                { name: 'Node.js', level: 88 },
                { name: 'Python', level: 85 },
                { name: 'PostgreSQL', level: 82 },
                { name: 'MongoDB', level: 80 },
            ],
            color: 'pink',
        },
        {
            title: 'TOOLS.exe',
            skills: [
                { name: 'Git', level: 95 },
                { name: 'Docker', level: 78 },
                { name: 'AWS', level: 75 },
                { name: 'Figma', level: 85 },
            ],
            color: 'purple',
        },
    ];

    const getColorClasses = (color: string) => {
        switch (color) {
            case 'cyan':
                return {
                    border: 'border-cyan-400',
                    text: 'text-cyan-400',
                    bg: 'bg-cyan-400',
                };
            case 'pink':
                return {
                    border: 'border-pink-500',
                    text: 'text-pink-500',
                    bg: 'bg-pink-500',
                };
            case 'purple':
                return {
                    border: 'border-purple-500',
                    text: 'text-purple-500',
                    bg: 'bg-purple-500',
                };
            default:
                return {
                    border: 'border-cyan-400',
                    text: 'text-cyan-400',
                    bg: 'bg-cyan-400',
                };
        }
    };

    return (
        <section id="skills" className="relative px-4 py-20">
            <div className="container mx-auto" ref={ref}>
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="mb-4 bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text font-mono text-5xl font-bold text-transparent">
                        SKILLS.json
                    </h2>
                    <div className="mx-auto h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500"></div>
                </motion.div>

                {/* Terminal Window */}
                <motion.div
                    className="border-opacity-50 mt-16 overflow-hidden rounded-lg border border-green-400 bg-black"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2">
                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        <span className="ml-4 font-mono text-sm text-gray-400">terminal.exe</span>
                    </div>

                    <div className="p-6 font-mono text-sm">
                        <motion.div
                            className="text-green-400"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: '100%' } : {}}
                            transition={{ duration: 2, delay: 1.5 }}
                            style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
                        >
                            <span className="text-cyan-400">$</span> npm run dev --skills
                        </motion.div>
                        <motion.div
                            className="mt-2 text-white"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 2.5 }}
                        >
                            <span className="text-yellow-400">✓</span> Skills loaded successfully
                        </motion.div>
                        <motion.div
                            className="text-white"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 3 }}
                        >
                            {skills && skills.length > 0 ? (
                                skills.map((skill, index) => (
                                    <div key={index} className="mt-2 flex items-center gap-2">
                                        <span className="text-green-400">✓</span>
                                        <span>{skill}</span>
                                    </div>
                                ))
                            ) : (
                                <div>No skills found</div>
                            )}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;

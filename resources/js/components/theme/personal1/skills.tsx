import GlareHover from '@/components/ui/glare-card';
import { motion } from 'framer-motion';

interface FitnessProps {
    skills?: string[];
    color?: string;
}

export default function PersonalSkills1({ skills, color }: FitnessProps) {
    return (
        <div className="relative">
            <div className="">
                <h1 className="mb-9 border border-transparent border-b-gray-200 p-4 text-2xl font-bold" style={{ color: color }}>
                    SKILLS
                </h1>
                <div className="relative mt-4 flex flex-wrap items-center justify-center gap-2">
                    {skills.map((skill, index) => (
                        <motion.span
                            key={skill}
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                            className="relative"
                        >
                            <GlareHover
                                glareColor={'#ffffff'}
                                glareOpacity={0.3}
                                glareAngle={-30}
                                width="380px"
                                height="150px"
                                glareSize={300}
                                background="#000"
                                transitionDuration={800}
                                playOnce={false}
                            >
                                <h2 style={{ fontSize: '3rem', fontWeight: '600', color: color, margin: 0 }}> {skill}</h2>
                            </GlareHover>
                        </motion.span>
                    ))}
                </div>
            </div>
        </div>
    );
}

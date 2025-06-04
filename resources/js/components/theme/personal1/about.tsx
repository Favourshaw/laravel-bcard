import Magnet from '@/components/ui/magnet-animation';
import AnimatedSkills from '@/components/ui/skills';
import { motion } from 'framer-motion';
import { WorkflowIcon } from 'lucide-react';

interface FitnessProps {
    bio?: string;
    avatar?: string;
    bname?: string;
    slogan?: string;
    description?: string;
    skills?: string[];
    color?: string;
}

export default function PersonalAbout1({ bio, bname, avatar, skills, slogan, description, color }: FitnessProps) {
    return (
        <div>
            <div className="flex flex-col gap-8 md:flex-row md:gap-20">
                <img src={avatar} alt="Alex Profile" className="w-full object-cover md:w-1/2" />
                <div className="flex flex-1 flex-col justify-center">
                    <p className="text-base text-gray-400">
                        <AnimatedSkills skills={skills} color={color} />
                    </p>
                    <h2 className="text-4xl font-bold text-gray-900">{bname}</h2>
                    <Magnet padding={50} disabled={false} magnetStrength={50}>
                        <p className="mt-4 text-base leading-relaxed text-gray-600 lg:text-lg">
                            {slogan ||
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                        </p>
                        <p className="mt-4 text-base leading-relaxed text-gray-600 lg:text-lg">
                            {bio ||
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                        </p>
                    </Magnet>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="mt-6 w-40 rounded border px-4 py-2 hover:bg-blue-50"
                        style={{ color: color, borderColor: color }}
                    >
                        Download CV
                    </motion.button>
                </div>
            </div>
            <div className="mt-12">
                <h3 className="mb-6 inline-block border-b-4 text-xl font-bold" style={{ borderColor: color }}>
                    What I Do
                </h3>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <motion.div whileHover={{ scale: 1.02 }} className="flex gap-4">
                        <WorkflowIcon className="mt-1 h-15 w-15" />
                        <div>
                            <p className="mt-1 text-xl text-gray-600">{description}</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

import Magnet from '@/components/ui/magnet-animation';
import AnimatedSkills from '@/components/ui/skills';
import { motion } from 'framer-motion';
import DynamicMap from '../map/map';

interface FitnessProps {
    bio?: string;
    avatar?: string;
    bname?: string;
    slogan?: string;
    description?: string;
    skills?: string[];
    color?: string;
}

export default function PersonalContact1({ bio, bname, avatar, skills, slogan, description, color }: FitnessProps) {
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
                <DynamicMap />
            </div>
        </div>
    );
}

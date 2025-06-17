import DecryptedText from '@/components/ui/decrypted-text';
import { motion } from 'framer-motion';
import { Link } from 'lucide-react';

interface beautyProps {
    color?: string;
    description?: string;
    username?: string;
}

const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 50, damping: 20 },
    },
};

const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { delay: 0.2, duration: 0.6 },
    },
};

const AboutBeauty: React.FC = ({ color, description, username }: beautyProps) => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={containerVariants}
            className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-4 p-6 md:grid-cols-2"
        >
            <motion.div className="overflow-hidden" variants={imageVariants} whileHover={{ scale: 1.9 }}>
                <img src="storage/theme/about-gif.gif" alt="Our Team" className="h-full w-full object-cover" />
            </motion.div>

            <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">About Us</h2>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                    <DecryptedText
                        text={
                            description ||
                            'I am a passionate creator dedicated to building meaningful connections through innovative design and storytelling. My mission is to transform ideas into engaging experiences that resonate with people.'
                        }
                        speed={100}
                        maxIterations={20}
                        characters="ABCD1234!?"
                        className="revealed"
                        parentClassName="all-letters"
                        encryptedClassName="encrypted"
                    />
                </p>

                <motion.div whileHover={{ scale: 1.05 }} className="inline-block cursor-pointer">
                    <a
                        href={`${username}/links`}
                        className="flex items-center rounded-full px-6 py-3 font-semibold text-white shadow transition hover:bg-[#61b267]"
                        style={{ background: color }}
                    >
                        Contact us <Link className="ml-2 h-4 w-4" />
                    </a>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default AboutBeauty;

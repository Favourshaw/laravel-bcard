import { motion } from 'framer-motion';
import { Link2 } from 'lucide-react';

interface LinkCardProps {
    title: string;
    description: string;
    image: string | React.ReactNode;
    url: string | URL;
    delay: number;
}

const LinkCard = ({ title, description, image, url, delay }: LinkCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden"
        >
            <motion.a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto block w-full max-w-md rounded-2xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-lg transition-all duration-300 hover:bg-white/15 hover:shadow-2xl"
                whileHover={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
            >
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <motion.div
                            className="h-16 w-16 overflow-hidden rounded-xl shadow-lg"
                            whileHover={{ rotate: 5 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <span className="h-full w-full">{image}</span>
                        </motion.div>
                        <motion.div
                            className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            whileHover={{ scale: 1.2 }}
                        >
                            <Link2 size={12} className="text-white" />
                        </motion.div>
                    </div>

                    <div className="min-w-0 flex-1">
                        <motion.h3
                            className="mb-1 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-purple-200"
                            whileHover={{ x: 5 }}
                        >
                            {title}
                        </motion.h3>
                        <p className="line-clamp-2 text-sm text-gray-300 transition-colors duration-300 group-hover:text-gray-200">{description}</p>
                    </div>

                    <motion.div
                        className="text-white/50 transition-colors duration-300 group-hover:text-white/80"
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                    >
                        <Link2 size={20} />
                    </motion.div>
                </div>
            </motion.a>
        </motion.div>
    );
};

export default LinkCard;

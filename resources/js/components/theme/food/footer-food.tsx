import Bottom from '@/components/bottom-text';
import { motion } from 'framer-motion';
import { Bot, Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import DynamicMap from '../map/map';

interface contactProps {
    location?: string;
    name?: string;
    username?: string;
}

export default function FooterFood({ location, name, username }: contactProps) {
    return (
        <div className="flex flex-col items-center justify-between bg-gradient-to-r from-[#021024] to-[#001d3d] px-4 pt-20 pb-40 font-sans text-white">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="w-full max-w-4xl space-y-6 rounded-2xl bg-[#0e0e11] p-10 text-center shadow-lg"
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    className="flex justify-center"
                >
                    <span className="flex items-center gap-2 rounded-full bg-[#1d1f1d] px-4 py-1 text-sm text-green-400">
                        <span className="h-2 w-2 rounded-full bg-green-400" /> Available
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-4xl leading-tight font-semibold text-white md:text-5xl"
                >
                    <DynamicMap location={location} />
                </motion.h1>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-full border border-white px-6 py-2 transition hover:bg-white hover:text-black"
                >
                    <a href={`mailto:${username}`} className="flex items-center gap-2">
                        <Mail className="h-5 w-5" />
                        Contact Us
                    </a>
                </motion.button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="mt-10 flex items-center justify-center gap-6 text-gray-400"
            >
                <a href="#" aria-label="LinkedIn">
                    <Linkedin className="hover:text-white" />
                </a>
                <a href="#" aria-label="GitHub">
                    <Github className="hover:text-white" />
                </a>
                <a href="#" aria-label="Instagram">
                    <Instagram className="hover:text-white" />
                </a>

                <a href="#" aria-label="Twitter">
                    <Twitter className="hover:text-white" />
                </a>
            </motion.div>

            <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="mt-10 text-center text-sm text-gray-500"
            >
                <Bottom name={name} />
            </motion.footer>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="fixed right-5 bottom-5 rounded-full bg-white p-4 text-black shadow-lg"
                aria-label="Bot"
            >
                <Bot />
            </motion.button>
        </div>
    );
}

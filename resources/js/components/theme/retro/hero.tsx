import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export interface NavProps {
    name: string;
    bio?: string;
    isOwner: boolean;
}

const Hero: React.FC<NavProps> = ({ name, bio, isOwner }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <section ref={ref} id="home" className="relative flex h-screen items-center justify-center overflow-hidden">
            {/* Parallax Background Elements */}
            <motion.div className="absolute inset-0 z-0" style={{ y }}>
                <div className="border-opacity-30 absolute top-20 left-10 h-32 w-32 rotate-45 border-2 border-pink-500"></div>
                <div className="border-opacity-30 absolute top-40 right-20 h-24 w-24 rotate-12 border-2 border-cyan-400"></div>
                <div className="absolute bottom-40 left-1/4 h-16 w-16 rotate-45 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20"></div>
                <div className="absolute right-1/3 bottom-20 h-20 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20"></div>
            </motion.div>

            <motion.div className="z-10 px-4 text-center" style={{ opacity }}>
                <motion.h1
                    className="mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text font-mono text-6xl font-bold text-transparent uppercase md:text-8xl"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    {name}
                    {isOwner && <span className="ml-2 text-cyan-400">👑</span>}
                </motion.h1>

                <motion.div
                    className="mb-8 font-mono text-2xl text-white md:text-4xl"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <span className="text-cyan-400">&lt;</span>
                    <motion.span className="text-pink-400" animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                        FULL STACK DEVELOPER
                    </motion.span>
                    <span className="text-cyan-400">/&gt;</span>
                </motion.div>

                <motion.p
                    className="mx-auto mb-12 max-w-2xl font-mono text-lg text-gray-300 md:text-xl"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.1 }}
                >
                    {bio ||
                        "Passionate about building scalable web applications and exploring new technologies. Let's create something amazing together!"}
                </motion.p>

                <motion.div
                    className="flex flex-col justify-center gap-6 sm:flex-row"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.4 }}
                >
                    <motion.button
                        className="rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 font-mono font-bold text-black hover:shadow-lg hover:shadow-cyan-400/25"
                        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 255, 0.3)' }}
                        whileTap={{ scale: 0.95 }}
                    >
                        VIEW MY WORK
                    </motion.button>

                    <motion.button
                        className="rounded-lg border-2 border-pink-500 px-8 py-4 font-mono font-bold text-pink-500 transition-colors hover:bg-pink-500 hover:text-black"
                        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(236, 72, 153, 0.3)' }}
                        whileTap={{ scale: 0.95 }}
                    >
                        CONTACT ME
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 transform"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="flex h-10 w-6 justify-center rounded-full border-2 border-cyan-400">
                    <motion.div
                        className="mt-2 h-3 w-1 rounded-full bg-cyan-400"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;

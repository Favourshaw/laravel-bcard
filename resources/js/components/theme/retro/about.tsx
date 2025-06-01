import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section id="about" className="relative px-4 py-20">
            <div className="container mx-auto" ref={ref}>
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="mb-4 bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text font-mono text-5xl font-bold text-transparent">
                        ABOUT_ME.exe
                    </h2>
                    <div className="mx-auto h-1 w-24 bg-gradient-to-r from-cyan-400 to-pink-500"></div>
                </motion.div>

                <div className="grid items-center gap-12 md:grid-cols-2">
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="bg-opacity-30 border-opacity-30 rounded-lg border border-cyan-400 bg-black p-6 backdrop-blur-sm">
                            <h3 className="mb-4 font-mono text-2xl font-bold text-cyan-400">&gt; console.log("Hello World!");</h3>
                            <p className="font-mono text-sm leading-relaxed text-gray-300">
                                I'm a passionate full-stack developer with 5+ years of experience creating digital solutions that blend cutting-edge
                                technology with stunning visual design. My journey started in the retro computing era, which still influences my
                                aesthetic choices today.
                            </p>
                        </div>

                        <div className="bg-opacity-30 border-opacity-30 rounded-lg border border-pink-500 bg-black p-6 backdrop-blur-sm">
                            <h4 className="mb-3 font-mono text-xl font-bold text-pink-400">&gt; My Philosophy</h4>
                            <p className="font-mono text-sm leading-relaxed text-gray-300">
                                Code is poetry, design is art, and user experience is everything. I believe in creating applications that not only
                                function flawlessly but also evoke emotion and wonder.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="relative z-10">
                            <div className="mx-auto h-80 w-80 rounded-lg bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 p-1">
                                <div className="flex h-full w-full items-center justify-center rounded-lg bg-black">
                                    <div className="text-center">
                                        <motion.div
                                            className="font-mono text-6xl font-bold text-cyan-400"
                                            animate={{ textShadow: ['0 0 10px #00ffff', '0 0 30px #00ffff', '0 0 10px #00ffff'] }}
                                            transition={{ repeat: Infinity, duration: 2 }}
                                        >
                                            {'<>'}
                                        </motion.div>
                                        <p className="mt-4 font-mono text-pink-400">DEVELOPER.EXE</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-cyan-400 opacity-70"
                            animate={{ y: [0, -10, 0], rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 4 }}
                        />
                        <motion.div
                            className="absolute -bottom-4 -left-4 h-6 w-6 rounded-full bg-pink-500 opacity-70"
                            animate={{ y: [0, 10, 0], rotate: -360 }}
                            transition={{ repeat: Infinity, duration: 3 }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

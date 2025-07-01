import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-center bg-white px-4 pt-10 text-center">
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-primary mb-4 flex max-w-sm flex-wrap items-center justify-center gap-x-1 text-xl font-semibold md:text-3xl lg:text-4xl"
            >
                <span>Empower Your</span>

                <span className="flex items-center">
                    <span className="text-accent mr-1">Networking</span>
                    <span className="flex items-center">
                        Experience
                        <motion.div
                            initial={{ rotate: -45, scale: 0 }}
                            animate={{ rotate: 0, scale: 1 }}
                            transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
                            className="h-[30px] w-[30px] md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px]"
                        >
                            <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                                <path
                                    d="M43.75 10.4167L4.16667 26.0417L18.75 28.125M43.75 10.4167L38.5417 41.6667L18.75 28.125M43.75 10.4167L18.75 28.125M18.75 28.125V39.5834L25.5184 32.756"
                                    stroke="#2ECC40"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </motion.div>
                    </span>
                </span>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-text mb-6 max-w-xl text-base sm:text-lg"
            >
                Craft your perfect business card and unlock seamless networking possibilities with a single scan.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full max-w-xs"
            >
                <Button variant="default" size="full">
                    Get Started
                </Button>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="mt-10 w-full max-w-4xl">
                <img src="storage/home/dotted-map.png" alt="Dotted World Map" className="h-auto w-full object-contain" />
            </motion.div>
        </section>
    );
};

export default HeroSection;

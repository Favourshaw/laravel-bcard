import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowUpRight, HandIcon } from 'lucide-react';

interface FitnessProps {
    color?: string;
    bmail?: string;
    slogan?: string;
    name?: string;
    linkedin?: string;
    instagram?: string;
    twitter?: string;
    username?: string;
    skills?: string[];
}

export default function PersonalContact1({ bmail, linkedin, color, instagram, name, slogan, twitter, username, skills }: FitnessProps) {
    return (
        <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center bg-black px-6 py-12 text-white">
            <div className="w-full space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-2 text-sm text-white/80"
                >
                    <span style={{ color: color }}>
                        <HandIcon />
                    </span>
                    Hey! It’s me {name || 'Alex'}
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-5xl leading-tight font-bold md:text-7xl"
                >
                    Crafting <span style={{ color: color }}>purpose driven</span>
                    <br />
                    <span style={{ color: color }}>experiences</span> that inspire
                    <br />& engage.
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
                >
                    <div className="w-full">
                        <hr className="min-w-ful h-2 text-green-50" />
                    </div>
                    <p className="max-w-xl text-sm text-white/70">
                        I work with brands globally to build pixel-perfect, engaging, and accessible digital experiences that drive results and
                        achieve business goals.
                    </p>
                </motion.div>
                <div className="flex flex-wrap justify-between gap-4 md:gap-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="mt-6 space-x-6 text-sm text-white/70"
                    >
                        <Link href={`${linkedin}`} className="hover:text-white" target="_blank" rel="noopener noreferrer">
                            LINKEDIN <ArrowUpRight className="inline-block h-4 w-4" />
                        </Link>

                        <Link href={`${instagram}`} className="hover:text-white" target="_blank" rel="noopener noreferrer">
                            INSTAGRAM <ArrowUpRight className="inline-block h-4 w-4" />
                        </Link>
                        <a href={`mailto:${bmail}`} className="hover:text-white">
                            GMAIL <ArrowUpRight className="inline-block h-4 w-4" />
                        </a>
                        <a href={`${twitter}`} className="hover:text-white">
                            X <ArrowUpRight className="inline-block h-4 w-4" />
                        </a>
                    </motion.div>
                    <Link href={`${username}/links`}>
                        <Button variant="secondary" className="rounded-full border-white">
                            Know me better
                        </Button>
                    </Link>
                </div>
            </div>

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-36 w-full overflow-hidden border-t border-white/10 bg-black py-4"
            >
                <motion.div
                    className="text-2xl font-semibold whitespace-nowrap"
                    animate={{ x: ['100%', '-100%'] }}
                    transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                >
                    {skills && skills.length > 0 ? (
                        skills.map((skill, index) => (
                            <span key={index} className="mx-4 text-white/10">
                                ✦{skill}✦
                            </span>
                        ))
                    ) : (
                        <span className="mx-4 text-white/10">
                            PERSONAL TRAINERS ✦ LIVE CLASSES ✦ OUTDOOR & ONLINE TRAINERS ✦ PERSONAL TRAINERS ✦ LIVE CLASSES ✦ OUTDOOR & ONLINE
                            TRAINERS ✦
                        </span>
                    )}
                </motion.div>
            </motion.div>
        </div>
    );
}

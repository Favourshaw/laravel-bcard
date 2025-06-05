import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Hero2() {
    return (
        <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-between bg-black px-6 py-12 text-white">
            <div className="space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-2 text-sm text-white/80"
                >
                    <span className="text-green-400">✋</span>
                    Hey! It’s me Devraj,
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-5xl leading-tight font-bold md:text-7xl"
                >
                    Crafting <span className="text-green-400">purpose driven</span>
                    <br />
                    <span className="text-green-400">experiences</span> that inspire
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
                <Button variant="outline" className="rounded-full border-white text-white hover:bg-white hover:text-black">
                    Know me better
                </Button>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mt-6 space-x-6 text-sm text-white/70"
                >
                    <a href="#" className="hover:text-white">
                        LINKEDIN <ArrowUpRight className="inline-block h-4 w-4" />
                    </a>
                    <a href="#" className="hover:text-white">
                        GITHUB <ArrowUpRight className="inline-block h-4 w-4" />
                    </a>
                    <a href="#" className="hover:text-white">
                        INSTAGRAM <ArrowUpRight className="inline-block h-4 w-4" />
                    </a>
                    <a href="#" className="hover:text-white">
                        GMAIL <ArrowUpRight className="inline-block h-4 w-4" />
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-16 w-full overflow-hidden border-t border-white/10 bg-black py-4"
            >
                <div className="animate-scroll px-4 text-2xl font-semibold whitespace-nowrap text-white/10">
                    <span className="mx-4 inline-block">✦ Community ✦ Development ✦ Mentor ✦ Websites ✦ Designing ✦ Growth ✦</span>
                    <span className="mx-4 inline-block">✦ Community ✦ Development ✦ Mentor ✦ Websites ✦ Designing ✦ Growth ✦</span>
                </div>
            </motion.div>
        </div>
    );
}

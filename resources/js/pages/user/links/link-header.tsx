import { motion } from 'framer-motion';

interface LinkHeaderProps {
    bname: string;
    bio: string;
    logo: string;
}

export default function LinkHeader({ bname, bio, logo }: LinkHeaderProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            className="mb-12 text-center"
        >
            <motion.div className="relative mx-auto mb-6" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
                <div className="mx-auto h-32 w-32 overflow-hidden rounded-full shadow-2xl ring-4 ring-white/20">
                    <img src={logo} alt={bname} className="h-full w-full object-cover" />
                </div>
                <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-pink-500/20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
            </motion.div>

            <motion.h1
                className="mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-4xl font-bold text-transparent text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                {bname}
            </motion.h1>

            <motion.p
                className="mx-auto max-w-md text-lg leading-relaxed text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
            >
                {bio}
            </motion.p>
        </motion.div>
    );
}

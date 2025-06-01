import { motion } from 'framer-motion';
import { useState } from 'react';

export interface NavProps {
    username?: string;
    logoUrl: string;
    onShare: () => void;
}

const Nav: React.FC<NavProps> = ({ username, logoUrl }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

    return (
        <motion.nav
            className="bg-opacity-30 border-opacity-30 fixed top-0 right-0 left-0 z-40 border-b border-cyan-400 bg-black backdrop-blur-sm"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <div className="container mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
                <motion.div className="font-mono text-2xl font-bold text-cyan-400" whileHover={{ scale: 1.1, textShadow: '0 0 20px #00ffff' }}>
                    <img src={logoUrl} alt={`${username}'s Logo`} className="mr-2 inline-block h-8 w-8" />
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden space-x-8 md:flex">
                    {navItems.map((item, index) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="relative font-mono text-white transition-colors hover:text-cyan-400"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            {item}
                            <motion.div
                                className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-400"
                                whileHover={{ width: '100%' }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <motion.button className="text-cyan-400 md:hidden" onClick={() => setIsOpen(!isOpen)} whileTap={{ scale: 0.9 }}>
                    <div className="relative h-6 w-6">
                        <motion.span
                            className="absolute block h-0.5 w-full bg-cyan-400"
                            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        />
                        <motion.span className="absolute top-2 block h-0.5 w-full bg-cyan-400" animate={isOpen ? { opacity: 0 } : { opacity: 1 }} />
                        <motion.span
                            className="absolute top-4 block h-0.5 w-full bg-cyan-400"
                            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        />
                    </div>
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <motion.div
                className="bg-opacity-90 bg-black md:hidden"
                initial={{ height: 0 }}
                animate={{ height: isOpen ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: 'hidden' }}
            >
                {navItems.map((item, index) => (
                    <motion.a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="block px-4 py-3 font-mono text-white transition-colors hover:text-cyan-400"
                        initial={{ x: -100, opacity: 0 }}
                        animate={isOpen ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => setIsOpen(false)}
                    >
                        {item}
                    </motion.a>
                ))}
            </motion.div>
        </motion.nav>
    );
};

export default Nav;

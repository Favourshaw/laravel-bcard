import { UsersPgProps } from '@/types/userPgProps';
import { Link } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import ScrollToTop from '../ui/ScrollToTop';
import FoodMenu from './food/menu';

export default function Food({ profileData }: UsersPgProps) {
    const { user, profile = {} } = profileData;
    if (!user) return null;

    const getStorageUrl = (path: string | undefined, fallback: string) => (path ? `/storage/${path.replace(/^\/?storage\//, '')}` : fallback);

    const logoUrl = getStorageUrl(profile.logo, '/storage/logos/logos.png');
    const primaryColor = user.colors?.primary || '#05df72';

    const [mounted, setMounted] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => setMounted(true), []);

    const navItems = ['Home', 'Pages', 'Menu', 'Blog', 'Shop'];

    return (
        <>
            <div className="relative min-h-screen overflow-hidden bg-gradient-to-r from-[#021024] to-[#001d3d] text-white">
                <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-black/30 px-8 py-4 shadow-md backdrop-blur-lg">
                    <div className="flex items-center gap-2">
                        <img src={logoUrl} alt={profile.bname} className="h-10 drop-shadow-lg" />
                    </div>

                    <ul className="hidden gap-8 font-medium md:flex">
                        {navItems.map((item) => (
                            <li key={item} className="cursor-pointer underline-offset-8 transition hover:text-gray-300 hover:underline">
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-4">
                        <Link href={`${user.username}/links`}>
                            <Button className="rounded-full px-5 py-2 font-semibold text-white shadow-md" style={{ background: primaryColor }}>
                                Contact Us
                            </Button>
                        </Link>

                        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </nav>

                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 80, damping: 18 }}
                            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-black/80 text-white backdrop-blur-lg md:hidden"
                        >
                            {navItems.map((item) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-3xl font-semibold hover:text-gray-300"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item}
                                </motion.div>
                            ))}
                            <Button
                                className="mt-6 rounded-full px-6 py-3 text-lg font-semibold"
                                style={{ background: primaryColor }}
                                onClick={() => setMenuOpen(false)}
                            >
                                Reservation
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.img
                    src="storage/theme/chili.png"
                    alt="chili"
                    className="absolute top-1/4 left-30 z-0 w-50"
                    initial={{ y: -10 }}
                    animate={{ y: 10 }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut',
                    }}
                />

                <motion.img
                    src="storage/theme/lettuce.png"
                    alt="lettuce"
                    className="absolute top-1/3 right-10 z-0 w-48"
                    initial={{ y: 0 }}
                    animate={{ y: -15 }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut',
                    }}
                />

                <motion.img
                    src="storage/theme/tomato.png"
                    alt="tomato"
                    className="absolute right-0 bottom-10 z-0 w-44 md:right-40"
                    initial={{ y: 10 }}
                    animate={{ y: -10 }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut',
                    }}
                />

                {/* Hero Content */}
                <div className="relative z-10 container mx-auto min-h-screen max-w-7xl items-center justify-between px-6 pt-32 md:flex">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={mounted ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="max-w-xl space-y-6"
                    >
                        <span className="mb-2 border px-2 py-2 text-sm font-semibold tracking-wider">THE BEST IN TOWN</span>
                        <h1 className="pt-3 text-6xl leading-tight font-extrabold uppercase md:text-6xl">
                            {profile.slogan || 'Delicious Food Delivered Fast'}
                        </h1>
                        <p className="text-lg text-gray-300">
                            {profile.bio ||
                                'Experience the finest culinary delights with our expertly crafted dishes, made from the freshest ingredients and delivered right to your door.'}
                        </p>
                        <Link href={`${profile.whatsapp || '#'}`} className="inline-block">
                            <Button className="rounded-full px-6 py-3 font-semibold text-white transition" style={{ background: primaryColor }}>
                                ORDER NOW
                            </Button>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={mounted ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.8 }}
                        className="relative mt-16 md:mt-0"
                    >
                        <div className="absolute -inset-6 z-0 mx-6 rounded-full bg-white/10 backdrop-blur-xl md:mx-0" />
                        <img src="storage/theme/foodbg.png" alt="Food" className="relative z-10 w-[500px] rounded-full" />
                    </motion.div>
                </div>

                <style>{`
                .animate-float { animation: float 6s ease-in-out infinite; }
                .animate-float2 { animation: float 5s ease-in-out infinite alternate; }
                .animate-float3 { animation: float 7s ease-in-out infinite alternate; }
                @keyframes float {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-10px); }
                }
            `}</style>
            </div>
            <FoodMenu skills={profile.skills} color={primaryColor} />
            <ScrollToTop />
        </>
    );
}

import { UsersPgProps } from '@/types/userPgProps';
import { Head } from '@inertiajs/react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useRef, useState } from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import CircularText from '../ui/circular-text';
import Magnet from '../ui/magnet-animation';

const Section = ({ children, id }: { children: React.ReactNode; id: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'], // Changed offset values
    });

    // Simplified animation - only slight vertical movement
    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    // Keep opacity at 1 when visible
    const opacity = useTransform(scrollYProgress, [1, 0.2, 0.8, 1], [0, 1, 1, 1]);

    return (
        <section id={id} ref={ref} className="relative flex min-h-screen w-full snap-start items-center justify-center overflow-hidden">
            <motion.div style={{ y, opacity }} className="flex h-full w-full items-center justify-center px-6">
                {children}
            </motion.div>
        </section>
    );
};

export default function Beauty({ profileData }: UsersPgProps) {
    const { scrollYProgress } = useScroll();
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const { user, profile = {} } = profileData;
    if (!user) return null;

    const getStorageUrl = (path: string | undefined, fallback: string) => (path ? `/storage/${path.replace(/^\/?storage\//, '')}` : fallback);

    const logoUrl = getStorageUrl(profile.logo, '/storage/logos/logos.png');
    const avatarUrl = getStorageUrl(profile.avatar, '/storage/avatars/avatar.png');
    const primaryColor = user.colors?.primary || '#c96230';

    const navLinks = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Blog', href: '#blog' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <main className="relative h-screen snap-y snap-mandatory overflow-y-scroll bg-white font-sans text-[#3e1f0e]">
            <Head title={`${user.name} - ${profile.bname}`} />
            <motion.div className="fixed top-0 right-0 left-0 z-[999] h-1 origin-left" style={{ scaleX, background: primaryColor }} />

            <nav className="sticky top-0 z-50 flex w-full items-center justify-between bg-white px-6 py-4 shadow-md">
                <div className="flex items-center space-x-2">
                    <img src={logoUrl} alt="Glowix Logo" className="h-8 w-8" />
                    <h1 className="text-2xl font-semibold">Glowix.</h1>
                </div>

                <ul className="hidden space-x-6 text-sm font-medium md:flex">
                    {navLinks.map((item) => (
                        <li key={item.href}>
                            <a href={item.href} className="text-[#3e1f0e] hover:underline">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="focus:outline-none md:hidden">
                    {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white px-6 py-4 md:hidden"
                    >
                        <ul className="flex flex-col space-y-4 text-lg">
                            {navLinks.map((item) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block py-2 font-semibold"
                                        style={{ color: primaryColor }}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            <Section id="home">
                <div className="relative mx-auto flex h-[80vh] w-full max-w-7xl items-center justify-start overflow-hidden rounded-[30px]">
                    <div className="absolute inset-0">
                        <img src={avatarUrl} alt="Hero" className="h-full w-full rounded-[30px] object-cover" />

                        <div className="absolute inset-0 rounded-[30px] bg-gradient-to-r from-black/70 to-black/30"></div>
                    </div>

                    <div className="relative z-10 max-w-3xl px-12 text-white md:px-32">
                        <Magnet padding={50} disabled={false} magnetStrength={2}>
                            <h2 className="mt-2 font-serif text-5xl leading-tight font-bold uppercase">{profile.slogan} </h2>
                            <p className="mt-4 text-base text-white/90">{profile.bio}</p>

                            <div className="mt-6 flex space-x-4">
                                <a
                                    href={profile.whatsapp || '#'}
                                    className="flex items-center rounded-full px-6 py-3 font-semibold text-white shadow transition hover:bg-[#61b267]"
                                    style={{ background: primaryColor }}
                                >
                                    Whatsapp <FaWhatsapp className="ml-2 h-4 w-4" />
                                </a>
                                <a
                                    href={profile.instagram || '#'}
                                    className="flex items-center rounded-full border border-white px-5 py-3 text-white transition hover:bg-white hover:text-[#c96230]"
                                >
                                    <FaInstagram className="mr-2 h-4 w-4" /> instagram
                                </a>
                            </div>

                            <div className="relative top-30 -right-24 w-[120px] md:top-20 md:-right-150">
                                <CircularText text={profile.bname} onHover="speedUp" spinDuration={20} className="custom-class uppercase" />
                                <span className="relative -top-6 left-9">
                                    <img src={logoUrl} className="h-12 w-12" />
                                </span>
                            </div>
                        </Magnet>
                    </div>
                </div>
            </Section>

            <Section id="about">
                <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 text-center">
                    <h2 className="mb-4 text-4xl font-semibold">About Us</h2>
                    <p className="text-lg text-gray-700">
                        Glowix is dedicated to helping you thrive through personalized coaching and holistic health practices.
                    </p>
                </div>
            </Section>

            <Section id="services">
                <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 text-center">
                    <h2 className="mb-4 text-4xl font-semibold">Services</h2>
                    <p className="text-lg text-gray-700">Fitness coaching, nutritional planning, and holistic wellness experiences.</p>
                </div>
            </Section>

            <Section id="blog">
                <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 text-center">
                    <h2 className="mb-4 text-4xl font-semibold">Our Blog</h2>
                    <p className="text-lg text-gray-700">Read the latest tips and insights on achieving vibrant health.</p>
                </div>
            </Section>

            <Section id="contact">
                <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 text-center">
                    <h2 className="mb-4 text-4xl font-semibold">Contact Us</h2>
                    <p className="mb-4 text-lg text-gray-700">Reach out to start your transformation journey with us.</p>
                    <button className="rounded-full bg-[#c96230] px-6 py-3 text-white hover:bg-[#b75124]">Email Us</button>
                </div>
            </Section>
        </main>
    );
}

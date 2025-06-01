import { PageProps } from '@inertiajs/core';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

import { Head } from '@inertiajs/react';
import Hero from './retro/hero';
import Nav from './retro/navbar';

interface UsersPageProps extends PageProps {
    profileData: {
        user: {
            id: string;
            name: string;
            username?: string;
            theme?: string;
            colors?: {
                primary: string;
                secondary: string;
                text: string;
            };
            created_at: string;
        };
        profile: {
            logo?: string;
            phone?: string;
            bio?: string;
            location?: string;
            facebook?: string;
            twitter?: string;
            instagram?: string;
            tiktok?: string;
            whatsapp?: string;
            qr?: string;
            social_links?: Record<string, string>;
        };
    };
    isOwner?: boolean;
}

export default function RetroTheme({ profileData, isOwner = false }: UsersPageProps) {
    if (!profileData?.user) return null;

    const { user, profile = {} } = profileData;
    const socialLinks = profile.social_links || {};

    const { primary, secondary, text } = user.colors || {
        primary: '#1f2937', // Default dark gray
        secondary: '#3b82f6', // Default blue
        text: '#111827', // Default text
    };

    const getStorageUrl = (path: string | undefined, fallback: string) => (path ? `/storage/${path.replace(/^\/?storage\//, '')}` : fallback);

    const logoUrl = getStorageUrl(profile.logo, '/defaults/default.png');
    const qrUrl = getStorageUrl(profile.qr, '/qrcodes/5.png');
    const profileUrl = `${window.location.origin}/profiles/${user.username || user.id}`;

    const handleShare = async () => {
        try {
            await navigator.share({
                title: `${user.name}'s Business Profile`,
                text: `Check out ${user.name}'s business profile`,
                url: profileUrl,
            });
        } catch {
            navigator.clipboard.writeText(profileUrl);
            alert('Profile link copied to clipboard!');
        }
    };
    const { scrollYProgress } = useScroll();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
            <Head title={`${user.name} - Home Page`} />
            {/* Animated Background Grid */}
            <motion.div className="fixed inset-0 opacity-20" style={{ y: backgroundY }}>
                <div className="bg-grid-pattern absolute inset-0"></div>
            </motion.div>

            {/* Floating Cursor Effect */}
            <motion.div
                className="pointer-events-none fixed z-50 h-6 w-6 rounded-full bg-cyan-400 mix-blend-difference"
                animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
                transition={{ type: 'spring', stiffness: 500, damping: 28 }}
            />

            <Nav username={user.username} logoUrl={logoUrl} onShare={handleShare} />

            <Hero name={user.name} bio={profile.bio} isOwner={isOwner} primaryColor={primary} textColor={text} />

            <footer className="bg-opacity-50 mt-20 bg-black py-8">
                <div className="container mx-auto px-4 text-center">
                    <motion.p
                        className="font-mono text-sm text-cyan-400"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        © 2025 Portfolio - Built with React & Framer Motion
                    </motion.p>
                </div>
            </footer>
        </div>
    );
}

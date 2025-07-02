import { UsersPgProps } from '@/types/userPgProps';
import { Head } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import PersonalAbout1 from './personal1/about';
import PersonalContact1 from './personal1/contact';
import PersonalSkills1 from './personal1/skills';

export default function Personal1({ profileData }: UsersPgProps) {
    const { user, profile = {} } = profileData;

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('About Me');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) setSidebarOpen(true);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!user) return null;

    const getStorageUrl = (path: string | undefined, fallback: string) => (path ? `/storage/${path.replace(/^\/?storage\//, '')}` : fallback);

    const avatarUrl = getStorageUrl(profile.avatar, '/storage/avatars/avatar.png');
    const logoUrl = getStorageUrl(profile.logo, '/storage/logos/logos.png');

    const tabs = ['About Me', 'Portfolio', 'Contact'];

    const primaryColor = user.colors?.primary || '#155dfc';

    const renderTabContent = () => {
        switch (activeTab) {
            case 'About Me':
                return (
                    <motion.section
                        key="About Me"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 md:p-12"
                    >
                        <PersonalAbout1
                            bio={profile.bio}
                            bname={profile.bname}
                            avatar={avatarUrl}
                            skills={profile.skills}
                            slogan={profile.slogan}
                            description={profile.description}
                            color={primaryColor}
                        />
                    </motion.section>
                );

            case 'Portfolio':
                return (
                    <motion.section key="Portfolio" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-6 lg:p-16">
                        <PersonalSkills1 skills={profile.skills} color={primaryColor} />
                    </motion.section>
                );

            case 'Contact':
                return (
                    <motion.section key="Contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-6">
                        <PersonalContact1
                            bmail={profile.bmail}
                            username={user.username}
                            whatsapp={profile.whatsapp}
                            phone={profile.phone}
                            slogan={profile.slogan}
                            bname={profile.bname}
                            location={profile.location}
                            color={primaryColor}
                        />
                    </motion.section>
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex min-h-screen flex-col text-gray-800 md:flex-row">
            <Head title={`${user.name} - Home Page`} />
            <div className="flex items-center justify-between bg-white p-4 shadow md:hidden">
                <h1 className="text-lg font-bold">{profile.bname}</h1>
                <button onClick={() => setSidebarOpen(!sidebarOpen)} className="rounded bg-gray-200 p-2">
                    {sidebarOpen ? 'Close' : 'Menu'}
                </button>
            </div>

            <AnimatePresence>
                {(!isMobile || sidebarOpen) && (
                    <motion.aside
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'tween' }}
                        className="fixed top-0 left-0 z-50 flex h-full w-64 flex-col items-center border-r bg-white p-6 md:static md:block md:flex md:h-auto md:w-64"
                    >
                        <img src={logoUrl} alt="logo" className="h-24 w-24 rounded-full object-cover" />
                        <h1 className="mt-4 text-center text-xl font-bold">{profile.bname} </h1>
                        <nav className="mt-8 w-full">
                            {tabs.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => {
                                        setActiveTab(item);
                                        if (isMobile) setSidebarOpen(false);
                                    }}
                                    className={`block w-full border-l-4 px-4 py-2 text-left hover:bg-gray-100`}
                                    style={{ borderColor: activeTab === item ? primaryColor : 'inherit' }}
                                >
                                    {item}
                                </button>
                            ))}
                        </nav>
                        <div className="mt-auto flex space-x-3 pt-6">
                            <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className="h-4 w-4" />
                            </a>

                            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="h-4 w-4" />
                            </a>

                            <a href={profile.twitter} target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="h-4 w-4" />
                            </a>
                        </div>
                        <p className="mt-4 text-xs text-gray-400">© 2025 All rights reserved.</p>
                    </motion.aside>
                )}
            </AnimatePresence>

            <main className="flex-1 bg-gray-50">
                <AnimatePresence mode="wait">{renderTabContent()}</AnimatePresence>
            </main>
        </div>
    );
}

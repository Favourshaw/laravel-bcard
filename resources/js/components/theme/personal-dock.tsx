import { UsersPgProps } from '@/types/userPgProps';
import { Head } from '@inertiajs/react';
import { Archive, Contact, HomeIcon, User2Icon } from 'lucide-react';
import Dock from '../ui/dock';
import SplashCursor from '../ui/splash-cursor';
import About2 from './personal1/about2';
import Footer2 from './personal1/footer2';
import Hero2 from './personal1/hero2';

export default function Personal2({ profileData }: UsersPgProps) {
    const { user, profile = {} } = profileData;

    if (!user) return null;

    const getStorageUrl = (path: string | undefined, fallback: string) => (path ? `/storage/${path.replace(/^\/?storage\//, '')}` : fallback);

    const avatarUrl = getStorageUrl(profile.avatar, '/storage/avatars/avatar.png');

    const primaryColor = user.colors?.primary || '#05df72';

    const items = [
        { icon: <HomeIcon size={25} />, label: 'Home', onClick: () => alert('Home!') },
        {
            icon: <Archive size={25} />,
            label: 'About',
            onClick: () => {
                const aboutSection = document.getElementById('about-section');
                if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
            },
        },
        { icon: <User2Icon size={25} />, label: 'Profile', onClick: () => alert('Profile!') },
        {
            icon: <Contact size={25} />,
            label: 'Settings',
            onClick: () => {
                const contactSection = document.getElementById('contact-section');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }
            },
        },
    ];

    return (
        <>
            <div className="flex min-h-screen flex-col bg-black md:flex-row">
                <SplashCursor />
                <Head title={`${user.name} - Home Page`} />
                <Hero2
                    name={user.name}
                    slogan={profile.slogan}
                    linkedin={profile.linkedin}
                    instagram={profile.instagram}
                    bmail={profile.bmail}
                    color={primaryColor}
                    twitter={profile.twitter}
                    username={user.username}
                    skills={profile.skills}
                />

                <Dock
                    items={items}
                    panelHeight={68}
                    baseItemSize={60}
                    magnification={90}
                    className="fixed bottom-0 left-0 z-50 mb-auto border border-transparent bg-black text-white shadow-md shadow-amber-50"
                />
            </div>

            <div id="about-section">
                <About2 bname={profile.bname} avatar={avatarUrl} description={profile.description} skills={profile.skills} bio={profile.bio} />
            </div>

            <div id="contact-section">
                <Footer2 location={profile.location} name={user.name} username={user.username} />
            </div>
        </>
    );
}

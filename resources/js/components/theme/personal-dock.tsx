import { UsersPgProps } from '@/types/userPgProps';
import { Head } from '@inertiajs/react';
import { Archive, CogIcon, HomeIcon, User2Icon } from 'lucide-react';
import Dock from '../ui/dock';
import SplashCursor from '../ui/splash-cursor';
import Hero2 from './personal1/hero2';

export default function Personal2({ profileData }: UsersPgProps) {
    const { user, profile = {} } = profileData;

    if (!user) return null;

    const getStorageUrl = (path: string | undefined, fallback: string) => (path ? `/storage/${path.replace(/^\/?storage\//, '')}` : fallback);

    const avatarUrl = getStorageUrl(profile.avatar, '/storage/avatars/avatar.png');
    const logoUrl = getStorageUrl(profile.logo, '/storage/logos/logos.png');

    const primaryColor = user.colors?.primary || '#155dfc';

    const items = [
        { icon: <HomeIcon size={25} />, label: 'Home', onClick: () => alert('Home!') },
        { icon: <Archive size={25} />, label: 'Archive', onClick: () => alert('Archive!') },
        { icon: <User2Icon size={25} />, label: 'Profile', onClick: () => alert('Profile!') },
        { icon: <CogIcon size={25} />, label: 'Settings', onClick: () => alert('Settings!') },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-black md:flex-row">
            <SplashCursor />
            <Head title={`${user.name} - Home Page`} />
            <Hero2 />

            <Dock
                items={items}
                panelHeight={68}
                baseItemSize={60}
                magnification={90}
                className="fixed bottom-0 left-0 mb-auto bg-black text-white shadow-md"
            />
        </div>
    );
}

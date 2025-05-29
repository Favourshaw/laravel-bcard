// resources/js/Components/Themes/MinimalTheme.tsx
import { Button } from '@/components/ui/button';
import HomeLayout from '@/layouts/home-layout';
import { type BreadcrumbItem } from '@/types';
import { PageProps } from '@inertiajs/core';
import { Head } from '@inertiajs/react';
import { Link as LinkIcon, MapPin, Phone, Share2 } from 'lucide-react';

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

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Business Profiles',
        href: '/profiles',
    },
];

export default function retroTheme({ profileData, isOwner = false }: UsersPageProps) {
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

    return (
        <HomeLayout breadcrumbs={breadcrumbs}>
            <Head title={`${user.name} - Business Profile`} />
            <div className="flex flex-1 flex-col gap-6 p-6" style={{ color: text }}>
                <div className="flex flex-col items-start gap-6 md:flex-row">
                    <div className="flex w-full items-center justify-between gap-6">
                        <div className="flex gap-3">
                            <img
                                src={logoUrl}
                                alt={`${user.name}'s logo`}
                                className="h-24 w-24 rounded-full border-4 object-cover shadow-lg"
                                style={{ borderColor: primary }}
                            />
                            <img src={qrUrl} alt="QR Code" className="h-24 w-24 rounded-lg border" style={{ borderColor: secondary }} />
                            <Button onClick={handleShare} className="gap-2" style={{ backgroundColor: primary, color: '#fff' }}>
                                <Share2 className="h-4 w-4" />
                                Share3
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg p-6 shadow" style={{ backgroundColor: '#fff', borderLeft: `4px solid ${secondary}` }}>
                        <h2 className="mb-4 text-xl font-semibold" style={{ color: primary }}>
                            Contactw
                        </h2>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Phone className="h-5 w-5" style={{ color: secondary }} />
                                <a href={`tel:${profile.phone}`} className="hover:underline" style={{ color: text }}>
                                    {profile.phone}
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="h-5 w-5" style={{ color: secondary }} />
                                <span>{profile.location || `No location added.`}</span>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg p-6 shadow" style={{ backgroundColor: '#fff', borderLeft: `4px solid ${secondary}` }}>
                        <h2 className="mb-4 text-xl font-semibold" style={{ color: primary }}>
                            About
                        </h2>
                        <p className="whitespace-pre-line">{profile.bio || `No bio available.`}</p>
                    </div>
                </div>

                <div className="rounded-lg p-6 shadow" style={{ backgroundColor: '#fff' }}>
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold" style={{ color: primary }}>
                            Connect
                        </h2>
                        {isOwner && (
                            <Button variant="ghost" size="sm">
                                Edit Profile
                            </Button>
                        )}
                    </div>

                    {Object.keys(socialLinks).length > 0 && (
                        <div className="mt-6 space-y-2">
                            <h3 className="font-medium" style={{ color: primary }}>
                                Other Links
                            </h3>
                            <div className="space-y-1">
                                {Object.entries(socialLinks).map(([name, url]) => (
                                    <a
                                        key={name}
                                        href={url}
                                        className="flex items-center gap-2 rounded-md p-2 text-sm hover:bg-gray-100"
                                        style={{ color: text }}
                                    >
                                        <LinkIcon className="h-4 w-4" style={{ color: secondary }} />
                                        <span>{name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </HomeLayout>
    );
}

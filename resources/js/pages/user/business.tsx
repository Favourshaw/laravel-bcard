import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import HomeLayout from '@/layouts/home-layout';
import { type BreadcrumbItem } from '@/types';
import { PageProps } from '@inertiajs/core';
import { Head, Link } from '@inertiajs/react';
import { Link as LinkIcon, MapPin, Phone, Share2 } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaWhatsapp } from 'react-icons/fa';

interface UsersPageProps extends PageProps {
    profileData: {
        user: {
            id: string;
            name: string;
            username?: string;
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

export default function BusinessProfile({ profileData, isOwner = false }: UsersPageProps) {
    if (!profileData?.user) {
        return (
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Profile Not Found" />
                <div className="p-6 text-center">Profile not found</div>
            </AppLayout>
        );
    }

    const { user, profile = {} } = profileData;
    const socialLinks = profile.social_links || {};

    // Generate proper asset URLs
    const getStorageUrl = (path: string | undefined, defaultImage: string) => {
        if (!path) return defaultImage;
        const cleanedPath = path.replace(/^\/?storage\//, '');
        return `/storage/${cleanedPath}`;
    };

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
            <div className="flex h-full flex-1 flex-col gap-6 p-6">
                {/* Profile Header with Share Button */}
                <div className="flex flex-col items-start gap-6 md:flex-row">
                    <div className="flex w-full items-center justify-between gap-6">
                        <div className="flex gap-3">
                            {/* Logo Image */}
                            <img
                                src={logoUrl}
                                alt={`${user.name}'s logo`}
                                className="h-24 w-24 rounded-full border-4 border-white object-cover shadow-lg"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = '/storage/defaults/default.png';
                                }}
                            />

                            {/* QR Code Image */}
                            <img
                                src={qrUrl}
                                alt="Profile QR Code"
                                className="h-24 w-24 rounded-lg border"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = '/storage/qrcodes/1.png';
                                }}
                            />

                            <Button variant="outline" onClick={handleShare} className="gap-2">
                                <Share2 className="h-4 w-4" />
                                Share
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg bg-white p-6 shadow">
                        <h2 className="mb-4 text-xl font-semibold">Contact</h2>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Phone className="h-5 w-5 text-gray-600" />
                                <a href={`tel:${profile.phone}`} className="hover:underline">
                                    {profile.phone}
                                </a>
                            </div>

                            <div className="flex items-center gap-2">
                                <MapPin className="h-5 w-5 text-black" />
                                <span>{profile.location || `${user.name} hasn't shared a Location yet.`}</span>
                            </div>
                        </div>
                    </div>

                    {/* Bio Section */}
                    <div className="rounded-lg bg-white p-6 shadow">
                        <h2 className="mb-4 text-xl font-semibold text-black">About</h2>
                        <p className="whitespace-pre-line text-gray-700">{profile.bio || `${user.name} hasn't shared a bio yet.`}</p>
                    </div>
                </div>

                {/* Social Links Section */}
                <div className="rounded-lg bg-white p-6 shadow">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold">Connect</h2>
                        {isOwner && (
                            <Button variant="ghost" size="sm">
                                Edit Profile
                            </Button>
                        )}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-4">
                        {profile.facebook && (
                            <Link
                                href={profile.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-md p-2 hover:bg-gray-100"
                            >
                                <FaFacebook className="h-5 w-5 text-blue-600" />
                                <span className="text-white">Facebook</span>
                            </Link>
                        )}
                        {profile.twitter && (
                            <a
                                href={profile.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-md p-2 hover:bg-gray-100"
                            >
                                <FaTwitter className="h-5 w-5 text-blue-400" />
                                <span className="sr-only">Twitter</span>
                            </a>
                        )}
                        {profile.instagram && (
                            <a
                                href={profile.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-md p-2 hover:bg-gray-100"
                            >
                                <FaInstagram className="h-5 w-5 text-pink-600" />
                                <span className="sr-only">Instagram</span>
                            </a>
                        )}
                        {profile.tiktok && (
                            <a
                                href={profile.tiktok}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-md p-2 hover:bg-gray-100"
                            >
                                <FaTiktok className="h-5 w-5 text-black" />
                                <span className="sr-only">TikTok</span>
                            </a>
                        )}

                        <a
                            href={`https://wa.me/${profile.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-md p-2 hover:bg-gray-100"
                        >
                            <FaWhatsapp className="h-5 w-5 text-green-600" />
                            <span className="sr-only text-black">WhatsApp {profile.whatsapp}</span>
                        </a>
                    </div>

                    {Object.keys(socialLinks).length > 0 && (
                        <div className="mt-6 space-y-2">
                            <h3 className="font-medium">Other Links</h3>
                            <div className="space-y-1">
                                {Object.entries(socialLinks).map(
                                    ([name, url]) =>
                                        url && (
                                            <a
                                                key={name}
                                                href={url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 rounded-md p-2 text-sm hover:bg-gray-100"
                                            >
                                                <LinkIcon className="h-4 w-4" />
                                                <span>{name}</span>
                                            </a>
                                        ),
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </HomeLayout>
    );
}

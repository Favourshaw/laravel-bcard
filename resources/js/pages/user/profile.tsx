import SocialLinksGrid from '@/components/social-link-grid';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { User, type BreadcrumbItem } from '@/types';
import { PageProps } from '@inertiajs/core';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

interface UsersPageProps extends PageProps {
    user: User & {
        profile: {
            bio?: string;
            phone?: string;
            social_links?: Record<string, string>;
        };
    };
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Profile',
        href: '/profile',
    },
];

export default function Profile({ user }: UsersPageProps) {
    const profile = user.profile || {};
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Profile" />
            <div className="flex h-full flex-1 flex-col gap-6 p-6">
                {/* Profile Header */}
                <div className="flex flex-col items-start gap-6 md:flex-row">
                    <div className="flex items-center gap-4">
                        <div>
                            <h1 className="text-2xl font-bold">{user.name}</h1>
                            <p className="text-white">{user.email}</p>
                        </div>
                    </div>
                    <div className="ml-auto"></div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-[914px] space-y-6"
                >
                    <div className="flex flex-col items-center justify-between md:flex-row">
                        <div>
                            <h1 className="text-xl font-semibold">showcaxe</h1>
                            <p className="text-sm">Empower Your Networking Experience</p>
                            <p className="text-sm">+234 815 610 8973</p>
                        </div>
                        <div className="mt-4 text-center md:mt-0">
                            <img src="/qr-code.svg" alt="QR Code" className="mx-auto h-24 w-24" />
                            <p className="text-xs">
                                Personal URL:
                                <br />
                                www.showcaxe/business.com
                            </p>
                            <button className="text-sm text-blue-600">copy</button>
                        </div>
                    </div>

                    <div className="prose max-w-none">
                        <h2 className="font-semibold">About me</h2>
                        <p>{profile.bio ? <p>{profile.bio}</p> : <p className="text-muted">No bio provided</p>}</p>
                    </div>

                    <div className="">
                        <SocialLinksGrid />
                    </div>

                    <div className="pt-4 text-center">
                        <Button variant="default" size="sm" className="gap-2">
                            <Link href={route('profiles.edits')}>Edit Profile</Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </AppLayout>
    );
}

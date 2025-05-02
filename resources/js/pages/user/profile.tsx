import { Button } from '@/components/ui/button';
import { CardContent } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { User, type BreadcrumbItem } from '@/types';
import { PageProps } from '@inertiajs/core';
import { Head, Link } from '@inertiajs/react';
import { Pencil } from 'lucide-react';

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
                    <div className="ml-auto">
                        <Button variant="outline" className="gap-2">
                            <Pencil className="h-4 w-4" />
                            <Link href={route('profiles.edits')}>Edit Profile</Link>
                        </Button>
                    </div>
                </div>

                {/* Profile Sections */}
                <div className="grid gap-6 md:grid-cols-3">
                    <CardContent>{profile.bio ? <p>{profile.bio}</p> : <p className="text-muted">No bio provided</p>}</CardContent>
                </div>
            </div>
        </AppLayout>
    );
}

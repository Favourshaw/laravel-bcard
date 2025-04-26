import HomeLayout from '@/layouts/home-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'About',
        href: '/about',
    },
];

export default function About() {
    return (
        <HomeLayout breadcrumbs={breadcrumbs}>
            <Head title="Home" />
            <div className="rounded-lg bg-white p-6 shadow">
                <h2 className="mb-4 text-2xl font-bold">Welcome to your about page</h2>
                <p className="text-gray-600">This is the main content area of your application. You can put any content here.</p>
            </div>
        </HomeLayout>
    );
}

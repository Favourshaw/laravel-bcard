import HomeLayout from '@/layouts/home-layout';
import { type BreadcrumbItem, type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Home',
        href: '/',
    },
];

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <HomeLayout breadcrumbs={breadcrumbs}>
            <Head title="Home" />
            <div className="rounded-lg bg-white p-6 shadow">
                <h2 className="mb-4 text-2xl font-bold">Welcome to your dashboard</h2>
                <p className="text-gray-600">This is the main content area of your application. You can put any content here.</p>
            </div>
        </HomeLayout>
    );
}

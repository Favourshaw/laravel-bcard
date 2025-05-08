import HomeLayout from '@/layouts/home-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import HeroSection from './index/hero';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Home',
        href: '/',
    },
];

export default function Welcome() {
    return (
        <HomeLayout breadcrumbs={breadcrumbs}>
            <Head title="Home" />
            <HeroSection />
        </HomeLayout>
    );
}

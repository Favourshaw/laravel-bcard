import HomeLayout from '@/layouts/home-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import Features from './index/features';
import HeroSection from './index/hero';
import Price from './index/price';

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
            <Features />
            <Price />
        </HomeLayout>
    );
}

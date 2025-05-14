import Faq from '@/components/faq';
import HomeLayout from '@/layouts/home-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import Cta from './index/cta';
import Features from './index/features';
import HeroSection from './index/hero';
import Price from './index/price';
import Testimonials from './index/testimonial';

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
            <motion.h2
                className="text-primary my-12 text-center text-2xl font-bold"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Pricing
            </motion.h2>
            <Price />
            <Testimonials />
            <Faq />
            <Cta />
        </HomeLayout>
    );
}

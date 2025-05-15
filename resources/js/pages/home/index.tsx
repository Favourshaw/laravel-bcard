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

const homeFaqs = [
    {
        title: 'What information do I need to provide during registration?',
        content:
            "You'll need to provide basic personal information, your Nigerian bank account details, and complete our verification process in compliance with financial regulations.",
    },
    {
        title: 'Do you offer technical support?',
        content: 'Yes, our team is available 24/7 to help you with any issues.',
    },
    {
        title: 'Can I cancel anytime?',
        content: 'Absolutely, there are no contracts or commitments.',
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
            <Faq data={homeFaqs} />
            <Cta />
        </HomeLayout>
    );
}

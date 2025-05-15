import Faq from '@/components/faq';
import HomeLayout from '@/layouts/home-layout';
import { Head } from '@inertiajs/react';
import Benefit from './pricing/benefit';
import PriceCta from './pricing/priceCta';
import Pricing from './pricing/pricingHero';

const priceFaqs = [
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

export default function Price() {
    return (
        <HomeLayout>
            <Head title="Pricing" />
            <Pricing />
            <Benefit />
            <Faq data={priceFaqs} />
            <PriceCta />
        </HomeLayout>
    );
}

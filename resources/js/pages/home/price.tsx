import HomeLayout from '@/layouts/home-layout';
import { Head } from '@inertiajs/react';
import Benefit from './pricing/benefit';
import Pricing from './pricing/pricingHero';

export default function Price() {
    return (
        <HomeLayout>
            <Head title="Pricing" />
            <Pricing />
            <Benefit />
        </HomeLayout>
    );
}

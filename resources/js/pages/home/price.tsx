import HomeLayout from '@/layouts/home-layout';
import { Head } from '@inertiajs/react';
import Pricing from './pricing/pricingHero';

export default function Price() {
    return (
        <HomeLayout>
            <Head title="Home" />
            <Pricing />
        </HomeLayout>
    );
}

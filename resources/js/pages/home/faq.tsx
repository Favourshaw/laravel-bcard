import HomeLayout from '@/layouts/home-layout';
import { Head } from '@inertiajs/react';
import FaqBody from './faq/faqItem';

export default function Welcome() {
    return (
        <HomeLayout>
            <Head title="FAQ" />
            <FaqBody />
        </HomeLayout>
    );
}

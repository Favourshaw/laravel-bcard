import { Head } from '@inertiajs/react';

import HeadingSmall from '@/components/heading-small';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { type BreadcrumbItem } from '@/types';
import { motion } from 'framer-motion';
import Price from '../home/index/price';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Pricing',
        href: '/settings/pricing',
    },
];

export default function Pricing() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Pricing" />

            <SettingsLayout>
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 mx-auto max-w-7xl px-4 text-center"
                >
                    <HeadingSmall title="Pricing" description="Update your account's appearance settings" />
                    <Price />
                </motion.div>
            </SettingsLayout>
        </AppLayout>
    );
}

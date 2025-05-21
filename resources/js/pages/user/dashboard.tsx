import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import DashInfo from './dash/dash-info';
import MyCard from './dash/my-card';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <DashInfo />
                <div className="">
                    <div className="text-muted p-4 text-base">Your card details</div>
                    <MyCard />
                </div>
            </div>
        </AppLayout>
    );
}

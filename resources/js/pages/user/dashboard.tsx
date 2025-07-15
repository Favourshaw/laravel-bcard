import AppLayout from '@/layouts/app-layout';
import { SharedData, type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import DashInfo from './dash/dash-info';
import MyCard from './dash/my-card';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    const { auth } = usePage<SharedData>().props;
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full max-w-7xl flex-1 flex-col gap-4 rounded-xl p-4">
                <DashInfo user={auth.user} />
                <div className="">
                    <div className="text-muted p-4 text-base">Your card details</div>
                    <MyCard />
                </div>
            </div>
        </AppLayout>
    );
}

import { User } from '@/types';
import { motion } from 'framer-motion';
import { Briefcase, CreditCard, Eye, Globe, Globe2, QrCode, QrCodeIcon, UserIcon } from 'lucide-react';

type InfoCard = {
    icon: React.ReactNode;
    label: string;
    value: string | number | React.ReactNode;
};

interface UserMenuContentProps {
    user: User;
}

const getStorageUrl = (path: string | undefined, defaultImage: string) => {
    if (!path) return defaultImage;
    const cleanedPath = path.replace(/^\/?storage\//, '');
    return `/storage/${cleanedPath}`;
};
export default function DashInfo({ user }: UserMenuContentProps) {
    // Example data, replace with actual user data
    const data: InfoCard[] = [
        { icon: <UserIcon />, label: 'Name', value: user.name || 'Gabriel Prosper' },
        { icon: <CreditCard />, label: 'Card type', value: 'Personal' },
        { icon: <Globe />, label: 'URL', value: `showcase.com/${user.username}` },
        {
            icon: <QrCode />,
            label: 'QR code',
            value: <img src="#" alt="QR Code" className="h-6 w-6" />,
        },
        { icon: <Eye />, label: 'No. of visits', value: 500 },
        { icon: <QrCodeIcon />, label: 'No. of QR scan', value: 200 },
        { icon: <Globe2 />, label: 'No. of visit via URL', value: 300 },
        { icon: <Briefcase />, label: 'Plan', value: 'Free' },
    ];
    return (
        <div className="w-full overflow-x-auto">
            <div className="flex w-[750px] flex-wrap gap-4 p-4 md:w-full">
                {data.map((item, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="flex min-w-fit flex-nowrap items-center justify-start gap-2 rounded-md border border-gray-200 bg-white px-4 py-3 shadow-sm lg:min-w-[280px]"
                    >
                        <span className="text-gray-700">{item.icon}</span>
                        <div className="flex flex-row flex-nowrap items-center gap-2">
                            <span className="text-xs font-medium text-gray-600">{item.label}</span>
                            <span className="text-sm font-semibold text-gray-800">
                                {typeof item.value === 'string' || typeof item.value === 'number' ? item.value : item.value}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

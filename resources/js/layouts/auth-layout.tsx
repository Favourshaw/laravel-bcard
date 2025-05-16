import AuthLayoutTemplate from '@/layouts/auth-card';
import { fadeInUp } from '@/lib/animations';
import { motion } from 'framer-motion';

export default function AuthLayout({ children, title, description, ...props }: { children: React.ReactNode; title: string; description: string }) {
    return (
        <AuthLayoutTemplate title={title} description={description} {...props}>
            <div className="relative flex min-h-[90vh] flex-col items-center justify-center bg-white px-4">
                <div className="w-full max-w-sm">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col items-center gap-4">
                            <motion.h2 variants={fadeInUp} custom={0} className="text-2xl font-bold text-gray-900">
                                {title}
                            </motion.h2>
                            <motion.p variants={fadeInUp} custom={1} className="text-sm text-gray-600">
                                {description}
                            </motion.p>
                        </div>
                        {children}
                    </div>{' '}
                </div>
            </div>
            <div className="fixed right-0 bottom-0 left-0 flex items-end justify-center gap-2 bg-white">
                <img src="storage/auth/auth-footer.png" alt="Footer img" className="h-auto w-full object-contain" />
            </div>
        </AuthLayoutTemplate>
    );
}

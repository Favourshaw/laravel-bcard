import { Button } from '@/components/ui/button';
import HomeLayout from '@/layouts/home-layout';
import { Head, router } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowBigLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <HomeLayout>
            <Head title="Page Not Found" />
            <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-10">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 lg:flex-row lg:gap-52">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center lg:text-left"
                    >
                        <h1 className="mb-4 text-4xl font-bold text-slate-900 sm:text-5xl">Uh oh, we can’t find that page…</h1>
                        <p className="mb-6 text-lg text-slate-600">
                            Sorry, the page you are looking for doesn’t exist or has been moved. Try searching our site:
                        </p>
                        <div className="flex justify-center gap-4 lg:justify-start">
                            <Button onClick={() => window.history.back()} variant="secondary">
                                <ArrowBigLeft /> Go back
                            </Button>
                            <Button onClick={() => router.visit('/')}>Take me home</Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full max-w-md"
                    >
                        <img src="/storage/home/notfound.svg" alt="404 Illustration" className="h-auto w-full object-contain" />
                    </motion.div>
                </div>
            </div>
        </HomeLayout>
    );
}

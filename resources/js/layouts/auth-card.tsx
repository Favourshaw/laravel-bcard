import { HomeNav } from '@/components/home-nav';
import Preloader from '@/components/ui/preloader';
import { type BreadcrumbItem } from '@/types';
import { AnimatePresence, motion } from 'motion/react';
import React from 'react';

interface HomeLayoutProps {
    children: React.ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children, breadcrumbs = [] }) => {
    return (
        <>
            <AnimatePresence mode="wait">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                >
                    <Preloader />
                    <HomeNav />

                    <main className="bg-white">
                        {breadcrumbs.length > 0 && (
                            <div className="border-b border-gray-200 bg-white p-4">
                                <nav className="flex" aria-label="Breadcrumb">
                                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                        {breadcrumbs.map((item, index) => (
                                            <li key={index} className="inline-flex items-center">
                                                {index > 0 && (
                                                    <svg
                                                        className="h-6 w-6 text-gray-400"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                )}
                                                <a
                                                    href={item.href}
                                                    className={`inline-flex items-center text-sm font-medium ${
                                                        index === breadcrumbs.length - 1 ? 'text-gray-700' : 'text-gray-500 hover:text-gray-700'
                                                    }`}
                                                >
                                                    {item.title}
                                                </a>
                                            </li>
                                        ))}
                                    </ol>
                                </nav>
                            </div>
                        )}

                        <div className="mx-auto">{children}</div>
                    </main>
                </motion.div>
            </AnimatePresence>
        </>
    );
};

export default HomeLayout;

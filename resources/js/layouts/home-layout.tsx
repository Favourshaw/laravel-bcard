// layouts/app/app-header-layout.tsx
import { SharedData, type BreadcrumbItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import React from 'react';

interface HomeLayoutProps {
    children: React.ReactNode;
    breadcrumbs?: BreadcrumbItem[];
    title?: string;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children, breadcrumbs = [], title = 'Home', ...props }) => {
    const { auth } = usePage<SharedData>().props;
    return (
        <>
            {/* Header */}
            <header className="sticky top-0 z-10 bg-white shadow-sm">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo on the left */}
                        <div className="flex-shrink-0">
                            <a href="/" className="flex items-center">
                                <span className="text-xl font-bold text-indigo-600">MyApp</span>
                            </a>
                        </div>

                        {/* Navigation links in the middle */}
                        <nav className="hidden md:block">
                            <ul className="flex space-x-8">
                                <li>
                                    <a href="#" className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-indigo-600">
                                        Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-indigo-600">
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-indigo-600">
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-indigo-600">
                                        Resources
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        {/* Login/Signup buttons on the right */}
                        <div className="flex items-center space-x-4">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            {/* Main content */}
            <main className="min-h-screen bg-gray-50">
                {/* Breadcrumbs */}
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

                {/* Page content */}
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</div>
            </main>
        </>
    );
};

export default HomeLayout;

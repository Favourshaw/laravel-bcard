'use client';

import { cn } from '@/lib/utils';
import { type NavItem, type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from './ui/button';

const homeNavItems: NavItem[] = [
    {
        title: 'Home',
        href: '/',
    },
    {
        title: 'About',
        href: '/about',
    },
    {
        title: 'Contact',
        href: '/contact',
    },
];

const navVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 20,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
};

export function HomeNav() {
    const page = usePage<SharedData>();
    const { auth } = page.props;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    return (
        <header className="sticky top-0 z-50 bg-white/80 shadow-sm backdrop-blur-md dark:bg-neutral-900/80">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">MyApp</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <ul className="flex space-x-8">
                            {homeNavItems.map((item) => (
                                <motion.li key={item.title} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            'hover:text-primary flex items-center space-x-2 font-medium transition-colors',
                                            page.url === item.href ? 'text-primary font-semibold' : 'text-muted-foreground',
                                        )}
                                    >
                                        <span>{item.title}</span>
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="rounded-md p-2 text-gray-700 hover:text-indigo-600 focus:outline-none md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Auth Buttons */}
                    <div className="hidden items-center space-x-4 md:flex">
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
                                <Button variant="secondary" asChild>
                                    <Link href={route('register')}>Register</Link>
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.nav
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={navVariants}
                        ref={navRef}
                        className="absolute top-16 right-0 left-0 bg-white shadow-lg md:hidden dark:bg-neutral-900"
                    >
                        <motion.ul className="space-y-2 px-4 py-2">
                            {homeNavItems.map((item) => (
                                <motion.li key={item.title} variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            'block rounded-lg px-4 py-3 font-medium transition-colors',
                                            page.url === item.href ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-accent',
                                        )}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.title}
                                    </Link>
                                </motion.li>
                            ))}
                            <motion.li variants={itemVariants} className="border-t border-gray-200 pt-2 dark:border-neutral-800">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="text-muted-foreground hover:bg-accent block rounded-lg px-4 py-3 font-medium"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <div className="flex space-x-2">
                                        <Link
                                            href={route('login')}
                                            className="text-muted-foreground hover:bg-accent flex-1 rounded-lg px-4 py-3 text-center font-medium"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="bg-primary/10 text-primary hover:bg-primary/20 flex-1 rounded-lg px-4 py-3 text-center font-medium"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            Register
                                        </Link>
                                    </div>
                                )}
                            </motion.li>
                        </motion.ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}

import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

const themes = ['retro', 'minimal', 'modern', 'fitness', 'personal1', 'personal2', 'food', 'business', 'beauty'];

const defaultColors = {
    primary: '#1d4ed8',
    secondary: '#9333ea',
    text: '#000000',
};

export default function Customize({ user }) {
    const [showModal, setShowModal] = useState(false);

    const [showPreviewNotice, setShowPreviewNotice] = useState(true);
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [iframeKey, setIframeKey] = useState(0);

    const { data, setData, post, processing } = useForm({
        theme: user.theme || 'business',
        colors: user.colors || defaultColors,
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPreviewNotice(false);
        }, 12000);
        return () => clearTimeout(timer);
    }, []);

    const generateIframeUrl = () => {
        return (
            `${window.location.origin}/${user.username}?theme=${data.theme}` +
            `&primary=${encodeURIComponent(data.colors.primary)}` +
            `&secondary=${encodeURIComponent(data.colors.secondary)}` +
            `&text=${encodeURIComponent(data.colors.text)}`
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await post(route('customize.update'));
        setShowModal(false);
        // Force iframe reload after save
        setIframeKey((prev) => prev + 1);
    };

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Profile',
            href: '/profile',
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`${user.name} `} />

            <AnimatePresence>
                {showPreviewNotice && (
                    <motion.div
                        className="fixed top-4 left-1/2 z-50 -translate-x-1/2 transform"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex items-center rounded-lg bg-yellow-100 p-4 text-yellow-800 shadow-lg">
                            <div className="mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <p className="font-medium">You're viewing a preview</p>
                                <p className="text-sm">
                                    This is not your live page. Changes won't be visible to others until saved.{' '}
                                    <b>
                                        Also not that some features will not work properly, kindly view the original page with the link below to
                                        confirm before sharing
                                    </b>
                                </p>
                                <a
                                    href={`/${user.username}`}
                                    className="mt-1 block text-sm font-medium text-yellow-600 hover:text-yellow-800"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View live page →
                                </a>
                            </div>
                            <button onClick={() => setShowPreviewNotice(false)} className="ml-4 text-yellow-600 hover:text-yellow-800">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="relative h-screen w-full overflow-hidden bg-white">
                <div className="absolute inset-0 overflow-auto">
                    <iframe
                        key={iframeKey}
                        ref={iframeRef}
                        src={generateIframeUrl()}
                        className="absolute inset-0 h-full w-full border-none"
                        title="Live Preview"
                    />
                </div>

                <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-3">
                    <motion.button
                        onClick={() => setShowModal(true)}
                        className="rounded-full bg-blue-600 px-5 py-3 text-white shadow-lg hover:bg-blue-700"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        🎨 Customize
                    </motion.button>

                    <motion.button
                        onClick={() => {
                            const url = `${window.location.origin}/${user.username}/links`;
                            navigator.clipboard.writeText(url);
                            alert('🔗 Link copied to clipboard!');
                        }}
                        className="rounded-full bg-green-600 px-5 py-3 text-white shadow-lg hover:bg-green-700"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        🔗 Share
                    </motion.button>

                    <motion.a
                        href="profiles/edits"
                        className="rounded-full bg-gray-700 px-5 py-3 text-white shadow-lg hover:bg-gray-800"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        ✏️ Edit Info
                    </motion.a>
                </div>

                <AnimatePresence>
                    {showModal && (
                        <motion.div
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className="w-full max-w-md space-y-6 rounded-2xl bg-white p-8 shadow-xl"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h2 className="text-center text-2xl font-bold text-gray-800">Customize Your Page</h2>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Theme
                                            <select
                                                value={data.theme}
                                                onChange={(e) => setData('theme', e.target.value)}
                                                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2"
                                            >
                                                {themes.map((theme) => (
                                                    <option key={theme} value={theme}>
                                                        {theme.charAt(0).toUpperCase() + theme.slice(1)}
                                                    </option>
                                                ))}
                                            </select>
                                        </label>

                                        {['primary', 'secondary', 'text'].map((key) => (
                                            <div key={key} className="flex items-center justify-between">
                                                <label className="text-sm font-medium text-gray-700">
                                                    {key.charAt(0).toUpperCase() + key.slice(1)} Color
                                                </label>
                                                <div className="flex items-center gap-2">
                                                    <input
                                                        type="color"
                                                        value={data.colors[key]}
                                                        onChange={(e) => setData('colors', { ...data.colors, [key]: e.target.value })}
                                                        className="h-8 w-8 cursor-pointer rounded-full border"
                                                    />
                                                    <span className="text-sm">{data.colors[key]}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <button
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                            className="rounded px-4 py-2 text-gray-600 hover:text-black"
                                        >
                                            Cancel
                                        </button>
                                        <motion.button
                                            type="submit"
                                            disabled={processing}
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                            className="rounded bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
                                        >
                                            {processing ? 'Saving...' : 'Save'}
                                        </motion.button>
                                    </div>
                                </form>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </AppLayout>
    );
}

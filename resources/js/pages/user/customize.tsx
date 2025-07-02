import AppLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import Business from './business';

const themes = ['retro', 'minimal', 'modern', 'fitness', 'personal1', 'personal2', 'food', 'business', 'beauty'];

const defaultColors = {
    primary: '#1d4ed8',
    secondary: '#9333ea',
    text: '#000000',
};

export default function Customize({ user }) {
    const [showModal, setShowModal] = useState(false);

    const { data, setData, post, processing } = useForm({
        theme: user.theme || 'business',
        colors: user.colors || defaultColors,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('customize.update'));
        setShowModal(false);
    };

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Profile',
            href: '/profile',
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Profile" />
            <div className="relative h-screen w-full overflow-hidden bg-white">
                {/* Fullscreen Theme Preview */}
                <div className="absolute inset-0 overflow-auto">
                    <Business profileData={{ user: { ...user, theme: data.theme, colors: data.colors } }} isOwner={true} />
                </div>

                <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-3">
                    {/* Customize Button */}
                    <motion.button
                        onClick={() => setShowModal(true)}
                        className="rounded-full bg-blue-600 px-5 py-3 text-white shadow-lg hover:bg-blue-700"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        🎨 Customize
                    </motion.button>

                    {/* Share Button */}
                    <motion.button
                        onClick={() => {
                            const url = window.location.href;
                            navigator.clipboard.writeText(url);
                            alert('🔗 Link copied to clipboard!');
                        }}
                        className="rounded-full bg-green-600 px-5 py-3 text-white shadow-lg hover:bg-green-700"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        🔗 Share
                    </motion.button>
                </div>

                {/* Modal */}
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
            </div>{' '}
        </AppLayout>
    );
}

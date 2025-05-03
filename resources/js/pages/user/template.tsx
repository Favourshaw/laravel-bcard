'use client';

import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';
import download from 'downloadjs';
import { AnimatePresence, motion } from 'framer-motion';
import * as htmlToImage from 'html-to-image';
import { useEffect, useRef, useState } from 'react';
import * as CardComponents from './templates/templates';

const styles = Object.keys(CardComponents);
const CARD_COMPONENTS = Object.values(CardComponents);

const presetGradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(to right, #ff758c, #ff7eb3)',
    'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
    'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
    'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
];

const breadcrumbs: BreadcrumbItem[] = [{ title: 'Template', href: '/template' }];

export default function Template() {
    const { props } = usePage();
    const user = props.auth.user;

    const [flipped, setFlipped] = useState(false);
    const [downloading, setDownloading] = useState(false);
    const [styleIndex, setStyleIndex] = useState(styles.indexOf(user.card_style || 'Card1'));
    const [isMobile, setIsMobile] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    const cardRef = useRef<HTMLDivElement>(null);
    const frontRef = useRef<HTMLDivElement>(null);
    const backRef = useRef<HTMLDivElement>(null);
    const gridContainerRef = useRef<HTMLDivElement>(null);

    const { data, setData, post } = useForm({
        card_style: styles[styleIndex],
        card_bg_type: user.card_bg_type || 'solid',
        card_bg_color: user.card_bg_color || '#ffffff',
        card_bg_gradient: user.card_bg_gradient || presetGradients[0],
        card_text_color: user.card_text_color || '#000000',
    });

    const CardComponent = CARD_COMPONENTS[styleIndex] || CARD_COMPONENTS[0];

    useEffect(() => {
        const update = () => setIsMobile(window.innerWidth < 768);
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    // Auto-hide scrollbar
    useEffect(() => {
        const el = gridContainerRef.current;
        if (!el) return;

        let timeout: NodeJS.Timeout;
        const handleScroll = () => {
            setScrolling(true);
            clearTimeout(timeout);
            timeout = setTimeout(() => setScrolling(false), 1000);
        };

        el.addEventListener('scroll', handleScroll);
        return () => el.removeEventListener('scroll', handleScroll);
    }, []);

    const handleStyleChange = (style: string, index: number) => {
        setStyleIndex(index);
        setData('card_style', style);
    };

    const handleSave = () => {
        post('/template/save-style');
    };

    const handleDownloadBoth = async () => {
        try {
            setDownloading(true);

            if (!frontRef.current || !backRef.current) return;

            const originalFrontStyle = frontRef.current.style.cssText;
            const originalBackStyle = backRef.current.style.cssText;

            frontRef.current.style.cssText = `
                display: block;
                width: 350px;
                height: 200px;
                position: absolute;
                top: 0;
                left: 0;
            `;

            backRef.current.style.cssText = `
                display: block;
                width: 350px;
                height: 200px;
                position: absolute;
                top: 0;
                left: 0;
            `;

            await new Promise((resolve) => setTimeout(resolve, 100));

            const [frontBlob, backBlob] = await Promise.all([
                htmlToImage.toBlob(frontRef.current, {
                    quality: 1,
                    pixelRatio: 2,
                }),
                htmlToImage.toBlob(backRef.current, {
                    quality: 1,
                    pixelRatio: 2,
                }),
            ]);

            frontRef.current.style.cssText = originalFrontStyle;
            backRef.current.style.cssText = originalBackStyle;

            if (frontBlob) download(frontBlob, `${user.name}-business-card-front.png`);
            if (backBlob) download(backBlob, `${user.name}-business-card-back.png`);
        } catch (error) {
            console.error('Error during download:', error);
            alert('Failed to download cards. Please try again.');
        } finally {
            setDownloading(false);
        }
    };

    const applyPresetGradient = (gradient: string) => {
        setData('card_bg_gradient', gradient);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Template" />
            <div className="space-y-6">
                {/* Card flip preview */}
                <div className="relative flex flex-col items-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={flipped ? 'back' : 'front'}
                            ref={cardRef}
                            className="h-[200px] w-[350px] cursor-pointer"
                            onClick={() => setFlipped(!flipped)}
                            initial={{ rotateY: 90, opacity: 0 }}
                            animate={{ rotateY: 0, opacity: 1 }}
                            exit={{ rotateY: -90, opacity: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <CardComponent
                                isBack={flipped}
                                bgColor={data.card_bg_color}
                                textColor={data.card_text_color}
                                bgGradient={data.card_bg_gradient}
                                bgType={data.card_bg_type}
                                user={user}
                            />
                        </motion.div>
                    </AnimatePresence>

                    <p className="mt-2 text-sm text-gray-500">Click card to flip</p>

                    {/* Hidden front/back for download */}
                    <div className="absolute -z-50 h-0 w-0 overflow-hidden">
                        <div ref={frontRef}>
                            <CardComponent
                                isBack={false}
                                bgColor={data.card_bg_color}
                                textColor={data.card_text_color}
                                bgGradient={data.card_bg_gradient}
                                bgType={data.card_bg_type}
                                user={user}
                            />
                        </div>
                        <div ref={backRef}>
                            <CardComponent
                                isBack={true}
                                bgColor={data.card_bg_color}
                                textColor={data.card_text_color}
                                bgGradient={data.card_bg_gradient}
                                bgType={data.card_bg_type}
                                user={user}
                            />
                        </div>
                    </div>
                </div>

                {/* Template grid */}
                <div className="rounded-lg border p-4">
                    <h3 className="mb-4 text-center text-lg font-medium">Select a Template</h3>
                    <div ref={gridContainerRef} className={`scroll-wrapper ${scrolling ? 'show-scroll' : ''}`}>
                        <motion.div className={`scroll-content ${isMobile ? 'mobile' : ''}`}>
                            {CARD_COMPONENTS.map((Component, index) => (
                                <div className="card-container" key={index} onClick={() => handleStyleChange(styles[index], index)}>
                                    <Component
                                        isBack={false}
                                        bgColor="white"
                                        textColor="black"
                                        bgGradient="linear-gradient(to right, white,white)"
                                        bgType={index % 2 === 0 ? 'solid' : 'gradient'}
                                        user={user}
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Background controls */}
                <div className="rounded-lg border p-4">
                    <div className="mb-4 flex justify-center gap-4">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                checked={data.card_bg_type === 'solid'}
                                onChange={() => setData('card_bg_type', 'solid')}
                                className="h-4 w-4"
                            />
                            Solid Color
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                checked={data.card_bg_type === 'gradient'}
                                onChange={() => setData('card_bg_type', 'gradient')}
                                className="h-4 w-4"
                            />
                            Gradient
                        </label>
                    </div>

                    {data.card_bg_type === 'solid' ? (
                        <div className="flex justify-center">
                            <div className="flex flex-col items-center gap-2">
                                <label className="block text-sm font-medium">Background Color</label>
                                <input
                                    type="color"
                                    value={data.card_bg_color}
                                    onChange={(e) => setData('card_bg_color', e.target.value)}
                                    className="h-10 w-16 cursor-pointer"
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div className="flex justify-center gap-4">
                                {extractGradientColors(data.card_bg_gradient).map((color, index) => (
                                    <div key={index} className="flex flex-col items-center gap-2">
                                        <label className="block text-sm font-medium">Color {index + 1}</label>
                                        <input
                                            type="color"
                                            value={color}
                                            onChange={(e) => {
                                                const colors = extractGradientColors(data.card_bg_gradient);
                                                colors[index] = e.target.value;
                                                setData(
                                                    'card_bg_gradient',
                                                    `linear-gradient(${extractGradientAngle(data.card_bg_gradient)}deg, ${colors.join(', ')})`,
                                                );
                                            }}
                                            className="h-10 w-16 cursor-pointer"
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col items-center gap-2">
                                <label className="block text-sm font-medium">Direction</label>
                                <select
                                    value={extractGradientAngle(data.card_bg_gradient)}
                                    onChange={(e) => {
                                        const colors = extractGradientColors(data.card_bg_gradient);
                                        setData('card_bg_gradient', `linear-gradient(${e.target.value}deg, ${colors.join(', ')})`);
                                    }}
                                    className="rounded border p-2"
                                >
                                    <option value="0">To Right</option>
                                    <option value="90">To Bottom</option>
                                    <option value="180">To Left</option>
                                    <option value="270">To Top</option>
                                    <option value="45">Diagonal Right</option>
                                    <option value="135">Diagonal Left</option>
                                </select>
                            </div>

                            <div className="mt-4">
                                <label className="mb-2 block text-sm font-medium">Preset Gradients</label>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {presetGradients.map((gradient, index) => (
                                        <button
                                            key={index}
                                            onClick={() => applyPresetGradient(gradient)}
                                            className="h-8 w-8 rounded-full border"
                                            style={{ background: gradient }}
                                            title={`Preset ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="mt-4 flex justify-center">
                        <div className="flex flex-col items-center gap-2">
                            <label className="block text-sm font-medium">Text Color</label>
                            <input
                                type="color"
                                value={data.card_text_color}
                                onChange={(e) => setData('card_text_color', e.target.value)}
                                className="h-10 w-16 cursor-pointer"
                            />
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex justify-center gap-3">
                    <button onClick={handleSave} className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                        Save Design
                    </button>
                    <button
                        onClick={handleDownloadBoth}
                        disabled={downloading}
                        className="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 disabled:opacity-50"
                    >
                        {downloading ? 'Downloading...' : 'Download Both Sides'}
                    </button>
                </div>
            </div>

            <style>{`
                .scroll-wrapper {
                    width: 100%;
                    max-height: 600px;
                    overflow-x: auto;
                    overflow-y: hidden;
                    position: relative;
                    scrollbar-width: thin;
                    scrollbar-color: #6366f1 transparent;
                    transition: scrollbar-color 0.3s ease;
                }

                .scroll-wrapper::-webkit-scrollbar {
                    height: 12px;
                }

                .scroll-wrapper::-webkit-scrollbar-track {
                    background: transparent;
                }

                .scroll-wrapper::-webkit-scrollbar-thumb {
                    background: #6366f1;
                    border-radius: 8px;
                    border: 2px solid transparent;
                    background-clip: content-box;
                }

                .scroll-wrapper::-webkit-scrollbar-thumb:hover {
                    background: #4f46e5;
                }

                .scroll-wrapper:not(.show-scroll)::-webkit-scrollbar-thumb {
                    background: transparent;
                }

                .scroll-content {
                    display: grid;
                    grid-template-rows: repeat(3, 1fr);
                    grid-auto-flow: column;
                    grid-auto-columns: minmax(300px, 1fr);
                    gap: 16px;
                    max-width: 300px;
                    height: 100%;
                    padding: 16px;
                }

                .scroll-content.mobile {
                    grid-template-rows: 1fr;
                }

                .card-container {
                    width: 100%;
                    height:150px;
                    max-width: 300px;
                    min-width: 250px;
                    cursor: pointer;
                    transition: transform 0.2s;
                }

                .card-container:hover {
                    transform: scale(1.02);
                }

                @media (max-width: 768px) {
                    .scroll-content {
                        grid-template-rows: 1fr !important;
                    }
                }
            `}</style>
        </AppLayout>
    );
}

// Helper functions for gradient manipulation
function extractGradientColors(gradient: string): string[] {
    const colorsMatch = gradient.match(/#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}|rgb\([^)]+\)|rgba\([^)]+\)/g);
    return colorsMatch || ['#ffffff', '#000000'];
}

function extractGradientAngle(gradient: string): string {
    const angleMatch = gradient.match(/(\d+)deg/);
    return angleMatch ? angleMatch[1] : '0';
}

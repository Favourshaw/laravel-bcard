'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import * as CardComponents from './templates/templates';

const CARD_COMPONENTS = Object.values(CardComponents);

export default function ScrollableCardGrid() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const update = () => setIsMobile(window.innerWidth < 768);
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    // Auto-hide scrollbar
    useEffect(() => {
        const el = containerRef.current;
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

    return (
        <div ref={containerRef} className={`scroll-wrapper ${scrolling ? 'show-scroll' : ''}`}>
            <motion.div className={`scroll-content ${isMobile ? 'mobile' : ''}`}>
                {CARD_COMPONENTS.map((CardComponent, index) => (
                    <div className="card-container" key={index}>
                        <CardComponent
                            isBack={false}
                            bgColor="#1d4ed8"
                            textColor="#fff"
                            bgGradient="linear-gradient(to right, #4f46e5, #3b82f6)"
                            bgType={index % 2 === 0 ? 'solid' : 'gradient'}
                            user={{
                                name: 'John Doe',
                                title: 'Software Engineer',
                                email: 'john@example.com',
                                phone: '123-456-7890',
                                website: 'https://example.com',
                            }}
                        />
                    </div>
                ))}
            </motion.div>

            <style>{`
                .scroll-wrapper {
                    width: 100%;
                    max-height: 500px;
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
                    grid-auto-columns: minmax(250px, 1fr);
                    gap: 16px;
                    height: 100%;
                    padding: 16px;
                }

                .scroll-content.mobile {
                    grid-template-rows: 1fr;
                }

                .card-container {
                    width: 100%;
                    height: 100%;
                    min-width: 250px;
                }

                @media (max-width: 768px) {
                    .scroll-content {
                        grid-template-rows: 1fr !important;
                    }
                }
            `}</style>
        </div>
    );
}

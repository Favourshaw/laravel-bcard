import { Button } from '@/components/ui/button';
import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section className="mt-10 flex flex-col items-center justify-center bg-white px-4 text-center">
            <div className="text-primary mb-4 flex max-w-sm flex-wrap items-center justify-center gap-x-1 text-xl font-semibold md:text-3xl lg:text-4xl">
                <span>Empower Your</span>

                <span className="flex items-center">
                    <span className="text-accent mr-1">Networking</span>
                    <span className="flex items-center">
                        Experience
                        <div className="h-[30px] w-[30px] md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px]">
                            <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                                <path
                                    d="M43.75 10.4167L4.16667 26.0417L18.75 28.125M43.75 10.4167L38.5417 41.6667L18.75 28.125M43.75 10.4167L18.75 28.125M18.75 28.125V39.5834L25.5184 32.756"
                                    stroke="#2ECC40"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </span>
                </span>
            </div>

            <p className="text-text mb-6 max-w-xl text-base sm:text-lg">
                Craft your perfect business card and unlock seamless networking possibilities with a single scan.
            </p>
            <Button variant="default" size="full" className="max-w-xs">
                Get Started
            </Button>

            <div className="mt-10 w-full max-w-4xl">
                <img src="storage/home/dotted-map.png" alt="Dotted World Map" className="h-auto w-full object-contain" />
            </div>
        </section>
    );
};

export default HeroSection;

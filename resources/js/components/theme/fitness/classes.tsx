import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface FitnessProps {
    primaryColor?: string;
}

const originalClasses = [
    {
        title: 'BODYBUILDING',
        img: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        link: '#',
    },
    {
        title: 'NUTRITION PLANS',
        img: 'https://images.pexels.com/photos/6068865/pexels-photo-6068865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        link: '#',
    },
    {
        title: 'GROUP WORKOUT',
        img: 'https://images.pexels.com/photos/1472887/pexels-photo-1472887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        link: '#',
    },
    {
        title: 'PERSONAL',
        img: 'https://images.pexels.com/photos/8874414/pexels-photo-8874414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        link: '#',
    },
    {
        title: 'CARDIO',
        img: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        link: '#',
    },
    {
        title: 'YOGA',
        img: 'https://images.pexels.com/photos/4325466/pexels-photo-4325466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        link: '#',
    },
];

const slideWidth = 350; // px
const slidesPerView = 3;
const autoPlayInterval = 3000; // ms

export default function FitnessClasses({ primaryColor }: FitnessProps) {
    const [currentIndex, setCurrentIndex] = useState(slidesPerView);
    const [transition, setTransition] = useState(true);
    const sliderRef = useRef<HTMLDivElement>(null);

    // Touch swipe handling
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const classes = [...originalClasses.slice(-slidesPerView), ...originalClasses, ...originalClasses.slice(0, slidesPerView)];
    const totalSlides = classes.length;

    const nextSlide = () => {
        setTransition(true);
        setCurrentIndex((prev) => prev + 1);
    };

    const prevSlide = () => {
        setTransition(true);
        setCurrentIndex((prev) => prev - 1);
    };

    const handleTransitionEnd = () => {
        if (currentIndex === totalSlides - slidesPerView) {
            setTransition(false);
            setCurrentIndex(slidesPerView);
        } else if (currentIndex === 0) {
            setTransition(false);
            setCurrentIndex(totalSlides - slidesPerView * 2);
        }
    };

    useEffect(() => {
        if (!transition) {
            const timer = setTimeout(() => setTransition(true), 50);
            return () => clearTimeout(timer);
        }
    }, [transition]);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, autoPlayInterval);
        return () => clearInterval(interval);
    }, []);

    // Touch swipe handlers
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const delta = touchEndX.current - touchStartX.current;
        if (delta > 50) {
            prevSlide();
        } else if (delta < -50) {
            nextSlide();
        }
    };

    return (
        <section className="overflow-hidden bg-[#1e2635] px-4 py-20 text-white">
            <div className="mx-auto mb-12 max-w-7xl text-center">
                <p className="text-sm font-semibold tracking-wider uppercase" style={{ color: primaryColor }}>
                    Fitness Class
                </p>
                <motion.h2
                    className="mt-2 text-3xl font-bold md:text-5xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    TRANSFORM YOUR BODY WITH OUR <br />
                    <span style={{ color: primaryColor }}>DYNAMIC FITNESS</span> CLASSES
                </motion.h2>
            </div>

            <div className="relative mx-auto max-w-7xl">
                <div className="overflow-hidden" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
                    <div
                        ref={sliderRef}
                        className="flex"
                        style={{
                            transform: `translateX(-${currentIndex * slideWidth}px)`,
                            transition: transition ? 'transform 0.5s ease-in-out' : 'none',
                            width: `${totalSlides * slideWidth}px`,
                        }}
                        onTransitionEnd={handleTransitionEnd}
                    >
                        {classes.map((cls, i) => (
                            <div key={i} className="px-2" style={{ width: `${slideWidth}px`, flexShrink: 0 }}>
                                <motion.div whileHover={{ scale: 1.03 }} className="relative h-[200px] overflow-hidden rounded-md bg-black shadow-lg">
                                    <img src={cls.img} alt={cls.title} className="h-full w-full object-cover opacity-80" />
                                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-2">
                                        <h3 className="text-xs font-bold">{cls.title}</h3>
                                        <a
                                            href={cls.link}
                                            className="mt-1 inline-flex items-center gap-1 text-xs font-semibold"
                                            style={{ color: primaryColor }}
                                        >
                                            Read <ArrowRight size={12} />
                                        </a>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-10 text-center text-sm text-gray-300">
                Expert guidance for your fitness journey.{' '}
                <a href="#" className="font-bold underline" style={{ color: primaryColor }}>
                    Join us today and start transforming!
                </a>
            </div>
        </section>
    );
}

import { Button } from '@/components/ui/button';
import { UsersPgProps } from '@/types/userPgProps';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useRef, useState } from 'react';
import FitnessClasses from './fitness/classes';
import Footer from './fitness/footer';

export default function Fitness({ profileData }: UsersPgProps) {
    const { user, profile = {} } = profileData;
    const [menuOpen, setMenuOpen] = useState(false);
    const aboutRef = useRef(null);

    const classesRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToAbout = () => {
        if (aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToClasses = () => {
        classesRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = () => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const primaryColor = user.colors?.primary || 'orange';
    const gradient = `linear-gradient(to right, ${user.colors?.primary || '#84cc16'}, ${user.colors?.secondary || '#65a30d'})`;

    if (!user) return null;

    const getStorageUrl = (path: string | undefined, fallback: string) => (path ? `/storage/${path.replace(/^\/?storage\//, '')}` : fallback);

    const logoUrl = getStorageUrl(profile.logo, '/storage/logos/logos.png');

    return (
        <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-[#0d0f1a] to-[#1b1f2f] text-white">
            <div className="relative">
                <div className='absolute inset-0 z-0 bg-[url("storage/theme/fitness-hero.jpg")] bg-cover bg-center bg-no-repeat opacity-30' />
                <Head title={`${user.name} - Home Page`} />
                <nav className="relative border-b border-white/10 p-4 md:px-0 md:py-6">
                    <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
                        <div className="flex items-center gap-2 text-xl font-bold" style={{ color: primaryColor }}>
                            <img src={logoUrl} alt="Logo" className="h-8 w-8" />
                        </div>
                        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
                            <a href="#" className="transition-opacity hover:opacity-80" style={{ color: primaryColor }}>
                                Home
                            </a>
                            <button onClick={scrollToAbout} className="transition-opacity hover:opacity-80" style={{ color: primaryColor }}>
                                About Us
                            </button>
                            <button onClick={scrollToClasses} className="transition-opacity hover:opacity-80" style={{ color: primaryColor }}>
                                Classes
                            </button>

                            <button onClick={scrollToContact} className="transition-opacity hover:opacity-80" style={{ color: primaryColor }}>
                                Contact Us
                            </button>

                            <Button
                                className="rounded-full px-4 py-2 font-semibold text-black transition-opacity hover:opacity-90"
                                style={{ backgroundColor: primaryColor }}
                            >
                                Get Started
                            </Button>
                        </div>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            style={{ color: primaryColor }}
                            className="transition-opacity hover:opacity-80 md:hidden"
                        >
                            {menuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </nav>

                {menuOpen && (
                    <div className="relative flex flex-col gap-4 border-t border-white/10 bg-[#1b1f2f] px-6 py-4 text-sm md:hidden">
                        <a href="#" className="transition-opacity hover:opacity-80" style={{ color: primaryColor }}>
                            Home
                        </a>
                        <button onClick={scrollToAbout} className="text-left transition-opacity hover:opacity-80" style={{ color: primaryColor }}>
                            About Us
                        </button>
                        <button onClick={scrollToClasses} className="text-left transition-opacity hover:opacity-80" style={{ color: primaryColor }}>
                            Classes
                        </button>

                        <button onClick={scrollToContact} className="text-left transition-opacity hover:opacity-80" style={{ color: primaryColor }}>
                            Contact Us
                        </button>

                        <Button
                            className="w-fit rounded-full px-4 py-2 font-semibold text-black transition-opacity hover:opacity-90"
                            style={{ backgroundColor: primaryColor }}
                        >
                            Get Started
                        </Button>
                    </div>
                )}

                <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center justify-between px-6 py-12 md:flex-row md:py-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full space-y-6 md:w-1/2"
                    >
                        <p className="text-sm font-semibold tracking-wider uppercase" style={{ color: primaryColor }}>
                            #1 Fitness Hub
                        </p>
                        <h1 className="text-4xl leading-tight font-extrabold sm:text-5xl md:text-6xl">
                            <span style={{ backgroundImage: gradient }} className="bg-clip-text text-transparent">
                                {profile.slogan || 'ANYTHING YOU PUT YOUR MIND TO'}
                            </span>{' '}
                        </h1>
                        <p className="max-w-lg text-gray-300">
                            It's your mind that needs convincing. Push past your limits, stay committed, and watch as your body transforms into a
                            powerhouse of strength and resilience. Start your journey today & truly capable of!
                        </p>
                        <div className="flex flex-wrap gap-8">
                            <div>
                                <p className="text-2xl font-bold">1200+</p>
                                <p className="text-sm text-gray-400">Active Members</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold">12+</p>
                                <p className="text-sm text-gray-400">Certified Trainers</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold">20+</p>
                                <p className="text-sm text-gray-400">Year Of Experience</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button
                                className="flex items-center gap-2 rounded-full px-6 py-3 text-lg font-semibold text-black"
                                style={{ backgroundColor: primaryColor }}
                            >
                                Get Started <ArrowRight size={18} />
                            </Button>
                            <Button
                                variant="outline"
                                className="flex items-center gap-2 rounded-full px-6 py-3 text-lg font-semibold"
                                style={{ borderColor: primaryColor, color: primaryColor }}
                            >
                                Explore More <ArrowRight size={18} />
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative mb-10 flex w-full justify-center md:mb-0 md:w-1/2"
                    >
                        <div
                            className="absolute top-1/2 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 transform rounded-full blur-3xl"
                            style={{ backgroundColor: `${primaryColor}30` }}
                        />

                        <img src="/storage/theme/dumbell.png" alt="Dumbell" className="w-full max-w-sm object-contain sm:max-w-md" />

                        {/* Top-right Badge */}
                        <div
                            className="absolute top-2 right-4 flex h-20 w-20 rotate-12 flex-col items-center justify-center rounded-full p-2 text-center text-xs font-bold text-black sm:h-24 sm:w-24 md:right-16"
                            style={{ backgroundColor: primaryColor }}
                        >
                            <span className="text-[10px] leading-tight">GYM * BODYBUILDING * EXERCISE * WORKOUT</span>
                            <ArrowRight className="mt-1 rotate-[-12deg]" size={18} />
                        </div>

                        {/* Bottom-left Red Badge */}
                        <div className="absolute bottom-0 left-4 flex h-20 w-20 rotate-[-12deg] flex-col items-center justify-center rounded-full bg-red-600 p-2 text-center text-xs font-bold text-white shadow-lg sm:h-24 sm:w-24 md:left-12">
                            <span className="text-[10px] leading-tight">
                                100% <br /> FIT ZONE
                            </span>
                        </div>

                        {/* Floating Icon */}
                        <motion.div
                            initial={{ y: 0 }}
                            animate={{ y: [0, -12, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="absolute top-10 right-1/3"
                        >
                            <img src="/storage/theme/dumbell-rack.png" alt="Dumbbell" className="h-8 w-8" />
                        </motion.div>
                    </motion.div>
                </div>

                <div className="w-full overflow-hidden border-y border-white/10 bg-[#12141d] py-4">
                    <div className="animate-marquee text-sm font-bold whitespace-nowrap" style={{ color: primaryColor }}>
                        <span className="mx-6">🏋️ GYM</span>
                        <span className="mx-6">💪 BODYBUILDING</span>
                        <span className="mx-6">🏃 EXERCISE</span>
                        <span className="mx-6">🔥 WORKOUT</span>
                        <span className="mx-6">🧘 FITNESS</span>
                        <span className="mx-6">🥦 NUTRITION</span>
                    </div>
                </div>
            </div>
            <div ref={aboutRef} className="mx-auto max-w-7xl px-6 py-16 md:py-24">
                <div className="flex flex-col items-center gap-8 lg:flex-row">
                    <div className="flex w-full flex-col gap-4 sm:flex-row lg:w-1/2 lg:flex-col">
                        <img src="/storage/theme/trainer-about1.jpg" alt="Trainer" className="w-full rounded-xl" />
                    </div>

                    <div className="w-full space-y-6 lg:w-1/2">
                        <p className="flex items-center gap-2 font-semibold" style={{ color: primaryColor }}>
                            <span className="text-xl">🏋️</span> About Us
                        </p>
                        <h2 className="text-3xl leading-snug font-extrabold md:text-4xl">
                            EMPOWERING YOU TO ACHIEVE <br /> <span style={{ color: primaryColor }}>YOUR FITNESS GOALS</span>
                        </h2>
                        <p className="text-gray-300">
                            {profile.description ||
                                "At our fitness center, we believe in empowering individuals to achieve their fitness goals through personalized training, state-of-the-art equipment, and a supportive community. Whether you're a beginner or a seasoned athlete, we're here to help you every step of the way."}
                        </p>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div>
                                <p className="font-bold" style={{ color: primaryColor }}>
                                    ⚡ Personal Trainer
                                </p>
                                <p className="text-sm text-gray-300">Achieve your fitness goals with the guidance of our certified trainers.</p>
                            </div>
                            <div>
                                <p className="font-bold" style={{ color: primaryColor }}>
                                    ⚡ Cardio Programs
                                </p>
                                <p className="text-sm text-gray-300">From steady-state runs to interval sprints, our treadmill programs.</p>
                            </div>
                            <div>
                                <p className="font-bold" style={{ color: primaryColor }}>
                                    ⚡ Quality Equipment
                                </p>
                                <p className="text-sm text-gray-300">Our gym is equipped with the latest cardio & strength machines.</p>
                            </div>
                            <div>
                                <p className="font-bold" style={{ color: primaryColor }}>
                                    ⚡ Healthy Nutritions
                                </p>
                                <p className="text-sm text-gray-300">Fuel your fitness journey with customized meal plans for you.</p>
                            </div>
                        </div>
                        <Button className="mt-4 rounded-full px-6 py-3 font-semibold text-black" style={{ backgroundColor: primaryColor }}>
                            More About Us <ArrowRight size={18} className="ml-2" />
                        </Button>
                    </div>
                </div>
            </div>
            <div ref={classesRef}>
                <FitnessClasses primaryColor={primaryColor} />
            </div>

            <div ref={contactRef}>
                <Footer
                    bmail={profile.bmail}
                    bname={profile.bname}
                    logo={logoUrl}
                    phone={profile.phone}
                    location={profile.location}
                    slogan={profile.slogan}
                    primaryColor={primaryColor}
                />
            </div>
        </div>
    );
}

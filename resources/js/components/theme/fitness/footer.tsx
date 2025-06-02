import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

interface FitnessProps {
    location?: string;
    bmail?: string;
    slogan?: string;
    phone?: string;
    bname?: string;
    logo?: string;
    primaryColor?: string;
}

export default function Footer({ location, bmail, slogan, phone, logo, bname, primaryColor }: FitnessProps) {
    return (
        <div className="font-sans text-white">
            <div
                className="relative flex min-h-[90vh] items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: 'url("/storage/theme/retro-footer.jpg")' }}
            >
                <div className="absolute inset-0" />
                <div className="relative z-10 flex flex-col items-center justify-center p-4 text-center">
                    <motion.h1
                        className="mb-4 text-4xl font-bold md:text-6xl"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span style={{ color: primaryColor }}>{bname}</span>
                    </motion.h1>
                    <ul className="mb-6 space-y-2 text-lg md:text-xl">
                        <li>➜ Unlimited Access to All Gym Facilities</li>
                        <li>➜ Book a Personal Training Session</li>
                        <li>➜ Experience the Best in Fitness</li>
                    </ul>
                    <Button style={{ background: primaryColor }}>Get Membership</Button>
                </div>
            </div>

            {/* Moving Tape Banner */}
            <div className="overflow-hidden py-4 text-black" style={{ background: primaryColor }}>
                <motion.div
                    className="text-sm font-bold whitespace-nowrap md:text-lg"
                    animate={{ x: ['100%', '-100%'] }}
                    transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                >
                    <span className="mx-4">
                        PERSONAL TRAINERS ✦ LIVE CLASSES ✦ OUTDOOR & ONLINE TRAINERS ✦ PERSONAL TRAINERS ✦ LIVE CLASSES ✦ OUTDOOR & ONLINE TRAINERS ✦
                    </span>
                </motion.div>
            </div>

            <footer className="grid grid-cols-1 gap-10 bg-[#0f172a] px-4 py-10 text-gray-300 md:grid-cols-4 md:px-20">
                <div>
                    <img src={logo || '/storage/logos/logos.png'} alt={bname} className="mb-4 h-16 w-16 rounded-full object-cover" />
                    <p className="mb-4">{slogan}</p>
                </div>
                <div>
                    <h4 className="mb-2 text-lg font-semibold text-white">CONTACT US</h4>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                            <Phone size={16} /> {phone}
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail size={16} /> {bmail || 'your mail'}
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="mb-2 text-lg font-semibold text-white">OUR GYM TIMING</h4>
                    <ul className="space-y-2">
                        <li>24/7</li>
                    </ul>
                </div>
                <div>
                    <h4 className="mb-2 text-lg font-semibold text-white">OUR LOCATION</h4>
                    <p className="flex items-start gap-2">
                        <MapPin size={16} className="mt-1" /> {location || 'Your location here, e.g., 123 Fitness St, Fit City, FC 12345'}
                    </p>
                </div>
            </footer>
            <div className="bg-[#0f172a] py-4 text-center text-sm text-gray-500">Copyright © 2025 All Rights Reserved.</div>
        </div>
    );
}

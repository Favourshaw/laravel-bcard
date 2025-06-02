import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
    const [email, setEmail] = useState('');

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
                        <span className="text-yellow-400">LOGOIPSUM</span>
                    </motion.h1>
                    <ul className="mb-6 space-y-2 text-lg md:text-xl">
                        <li>➜ Unlimited Access to All Gym Facilities</li>
                        <li>➜ Book a Personal Training Session</li>
                        <li>➜ Experience the Best in Fitness</li>
                    </ul>
                    <Button className="rounded-full bg-lime-400 px-6 py-3 font-semibold text-black hover:bg-lime-300">Get Membership</Button>
                </div>
            </div>

            {/* Moving Tape Banner */}
            <div className="overflow-hidden bg-yellow-400 py-2 text-black">
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

            {/* Footer */}
            <footer className="grid grid-cols-1 gap-10 bg-[#0f172a] px-4 py-10 text-gray-300 md:grid-cols-4 md:px-20">
                <div>
                    <h3 className="mb-2 text-xl font-bold text-white">FITWELL</h3>
                    <p className="mb-4">Push harder, go further. Your fitness journey starts today!</p>
                    <div className="flex items-center gap-2">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border-none bg-gray-800 text-white focus:ring-0"
                        />
                        <Button className="bg-lime-400 text-black hover:bg-lime-300">→</Button>
                    </div>
                </div>
                <div>
                    <h4 className="mb-2 text-lg font-semibold text-white">CONTACT US</h4>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                            <Phone size={16} /> +91 123 456 789
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail size={16} /> info@domainname.com
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="mb-2 text-lg font-semibold text-white">OUR GYM TIMING</h4>
                    <ul className="space-y-2">
                        <li>Mon - Fri : 08:00 AM - 10:00 PM</li>
                        <li>Sat - Sun : 08:00 AM - 09:00 PM</li>
                    </ul>
                </div>
                <div>
                    <h4 className="mb-2 text-lg font-semibold text-white">OUR LOCATION</h4>
                    <p className="flex items-start gap-2">
                        <MapPin size={16} className="mt-1" /> 2715 Ash Dr. San Jose, South Dakota 83475
                    </p>
                </div>
            </footer>
            <div className="bg-[#0f172a] py-4 text-center text-sm text-gray-500">Copyright © 2025 All Rights Reserved.</div>
        </div>
    );
}

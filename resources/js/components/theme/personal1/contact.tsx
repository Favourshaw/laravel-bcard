import GlareHover from '@/components/ui/glare-card';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { MailCheckIcon, MoreHorizontal, PhoneCallIcon } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import DynamicMap from '../map/map';

interface FitnessProps {
    location?: string;
    phone?: string;
    color?: string;
    whatsapp?: string;
    bmail?: string;
    bname?: string;
    slogan?: string;
    username?: string;
}

export default function PersonalContact1({ bmail, whatsapp, color, location, phone, username, slogan, bname }: FitnessProps) {
    return (
        <div>
            <h1 className="mb-9 border border-transparent border-b-gray-200 p-4 text-2xl font-bold" style={{ color: color }}>
                CONTACT
            </h1>

            <div className="mt-12">
                <DynamicMap location={location} />
            </div>

            <div className="mt-12">
                <div className="relative mt-4 flex flex-wrap items-center justify-center gap-2">
                    <motion.span
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        className="relative"
                    >
                        <GlareHover
                            glareColor={'#000'}
                            glareOpacity={0.3}
                            glareAngle={-30}
                            width="300px"
                            height="150px"
                            glareSize={300}
                            background="#ffffff"
                            transitionDuration={800}
                            playOnce={false}
                        >
                            <div
                                style={{ fontSize: '20px', fontWeight: '600', color: color, margin: 0 }}
                                className="flex flex-col items-center gap-2"
                            >
                                <PhoneCallIcon className="h-9 w-9" />
                                <h2 className="text-gray-500">{phone || '123-456-7890'}</h2>
                            </div>
                        </GlareHover>
                    </motion.span>

                    <motion.span
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        className="relative"
                    >
                        <Link href={`mailto:${bmail}`} className="no-underline">
                            <GlareHover
                                glareColor={'#000'}
                                glareOpacity={0.3}
                                glareAngle={-30}
                                width="300px"
                                height="150px"
                                glareSize={300}
                                background="#ffffff"
                                transitionDuration={800}
                                playOnce={false}
                            >
                                <div
                                    style={{ fontSize: '20px', fontWeight: '600', color: color, margin: 0 }}
                                    className="flex flex-col items-center gap-2"
                                >
                                    <MailCheckIcon className="h-9 w-9" />
                                    <h2 className="text-gray-500">{bmail || 'myname@gmail.com'} </h2>
                                </div>
                            </GlareHover>
                        </Link>
                    </motion.span>

                    <motion.span
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        className="relative"
                    >
                        {' '}
                        <Link href={`https://wa.me/${whatsapp}`} className="no-underline">
                            <GlareHover
                                glareColor={'#000'}
                                glareOpacity={0.3}
                                glareAngle={-30}
                                width="300px"
                                height="150px"
                                glareSize={300}
                                background="#ffffff"
                                transitionDuration={800}
                                playOnce={false}
                            >
                                <div
                                    style={{ fontSize: '20px', fontWeight: '600', color: color, margin: 0 }}
                                    className="flex flex-col items-center gap-2"
                                >
                                    <FaWhatsapp className="h-9 w-9" />
                                    <h2 className="text-gray-500">{whatsapp || '123-456-7890'}</h2>
                                </div>
                            </GlareHover>
                        </Link>
                    </motion.span>

                    <motion.span
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        className="relative"
                    >
                        <Link href={`${username}/links`} className="no-underline">
                            <GlareHover
                                glareColor={'#000'}
                                glareOpacity={0.3}
                                glareAngle={-30}
                                width="300px"
                                height="150px"
                                glareSize={300}
                                background="#ffffff"
                                transitionDuration={800}
                                playOnce={false}
                            >
                                <div
                                    style={{ fontSize: '20px', fontWeight: '600', color: color, margin: 0 }}
                                    className="flex flex-col items-center gap-2"
                                >
                                    <MoreHorizontal className="h-9 w-9" />
                                    <h2 className="text-gray-500">More</h2>
                                </div>
                            </GlareHover>
                        </Link>
                    </motion.span>
                </div>
            </div>

            <div className="mx-auto mt-12 text-center">
                <h1 className="text-3xl font-bold text-gray-700 uppercase">{bname} </h1>{' '}
                <p className="text-xl font-semibold text-gray-400">{slogan}</p>
            </div>
        </div>
    );
}

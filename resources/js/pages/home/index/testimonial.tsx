import { motion } from 'framer-motion';

interface Testimonial {
    text: string;
    name: string;
    title: string;
    avatar: string;
}

const testimonials: Testimonial[] = [
    {
        text: 'Showcaxe transformed my networking game. The sleek and modern business card designs helped me make an unforgettable impression.',
        name: 'Segun',
        title: 'Marketing professional',
        avatar: 'storage/home/tstm1.svg',
    },
    {
        text: 'I love how easy it is to organize my online presence in one place. Sharing my profile with a simple scan is genius!',
        name: 'Chioma',
        title: 'Freelancer',
        avatar: 'storage/home/tstm1.svg',
    },
    {
        text: "Showcaxe's QR code feature is a game-changer. It's convenient, efficient, and adds a tech-savvy edge to my interactions.",
        name: 'Ali',
        title: 'Content creator',
        avatar: 'storage/home/tstm1.svg',
    },
];

export default function Testimonials() {
    return (
        <section>
            <div className="text-text mx-auto my-10 text-center text-base font-semibold md:text-2xl">Testimonials</div>
            <div className="mx-4 max-w-6xl rounded-md bg-[#D1FADF] px-4 py-4 md:rounded-[32px] lg:mx-auto lg:pt-20 lg:pb-40">
                <div className="grid grid-cols-2 items-center gap-2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-xl space-y-4 lg:ml-20"
                    >
                        <h2 className="text-text text-base font-bold md:text-5xl">Hear what others are saying about us</h2>
                        <p className="text-text text-sm md:text-xl">We will take care of everything else</p>
                    </motion.div>

                    <motion.img
                        src="storage/home/testimonial.png"
                        alt="Happy person"
                        className="w-full max-w-md rounded-xl lg:ml-20"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    />
                </div>
            </div>
            <div className="relative mx-auto mt-6 grid max-w-6xl gap-6 px-10 md:grid-cols-2 lg:-mt-26 lg:grid-cols-3 lg:pl-24">
                {testimonials.map((t, i) => (
                    <motion.div
                        key={i}
                        className="rounded-2xl border border-dashed border-black bg-white p-6"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 * i, duration: 0.5 }}
                    >
                        <p className="mb-4 text-sm text-gray-700">
                            <span className="text-2xl">“</span>
                            {t.text}
                        </p>
                        <div className="flex items-center gap-3">
                            <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full" />
                            <div>
                                <p className="text-sm font-semibold">@ {t.name}</p>
                                <p className="text-xs text-gray-500">{t.title}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

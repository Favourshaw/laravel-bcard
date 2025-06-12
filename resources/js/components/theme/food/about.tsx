import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

interface FoodProps {
    color?: string;
    description?: string;
    phone?: string;
    slogan?: string;
    avatar?: string;
}
export default function AboutFood({ color, description, phone, slogan, avatar }: FoodProps) {
    return (
        <section className="bg-gradient-to-t from-[#16323f] to-[#001d3d] px-6 py-16 text-white md:px-12">
            <div className="container mx-auto flex flex-col items-center gap-12 md:flex-row">
                <motion.div
                    className="relative w-full md:w-1/2"
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <img src={avatar} alt="Chef" className="w-full rounded-lg object-cover" />

                    <div className="absolute -bottom-6 left-4 flex items-center overflow-hidden rounded shadow-lg">
                        <div className="p-4 text-white" style={{ backgroundColor: color || '#ff6347' }}>
                            <Phone />
                        </div>
                        <div className="bg-white px-5 py-3 text-sm leading-snug font-semibold text-black">
                            <div className="text-gray-600">HOTLINE 24/7</div>
                            <div className="text-lg font-bold">{phone}</div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="mb-2 text-sm font-semibold tracking-widest uppercase" style={{ color: color }}>
                        Our Story
                    </p>
                    <h2 className="mb-4 text-4xl leading-tight font-extrabold md:text-5xl">{slogan || 'Delicious Food Delivered Fast'}</h2>
                    <hr className="my-6 border-white/30" />
                    <p className="text-lg leading-relaxed text-gray-300">
                        {description ||
                            'Welcome to our restaurant, where we bring you the finest culinary experiences. Our chefs are dedicated to crafting dishes that not only satisfy your hunger but also tantalize your taste buds. From farm-fresh ingredients to innovative recipes, we strive to create a dining experience that is both memorable and delightful.'}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

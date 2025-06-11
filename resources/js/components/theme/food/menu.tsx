import { motion } from 'framer-motion';

interface FitnessProps {
    skills?: string[];
    color?: string;
}

export default function FoodMenu({ skills, color }: FitnessProps) {
    return (
        <section className="relative bg-[#153240] px-4 py-16 text-white md:px-12">
            <img src="storage/theme/food-menu1.png" className="absolute top-10 left-10 w-48 opacity-30" alt="sandwich" />
            <img src="storage/theme/food-menu2.png" className="absolute right-10 bottom-10 w-44 opacity-40" alt="burger" />
            <div className="container mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <p className="mb-2 font-semibold tracking-wider" style={{ color: color }}>
                        OUR MENU
                    </p>
                    <h2 className="text-4xl font-bold"> Specially Crafted just for you</h2>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {skills.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="relative rounded-xl border border-white/10 bg-gradient-to-b from-[#183c4e] to-[#112d3b] p-6 text-center shadow-xl hover:shadow-2xl"
                        >
                            <img src="storage/theme/hotplate.svg" className="mx-auto mb-4 h-32 object-contain" />
                            <h3 className="mt-1 text-lg font-semibold text-white">{skill}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import AnimatedSkills from '@/components/ui/skills';
import { motion } from 'framer-motion';

interface FitnessProps {
    bio?: string;
    avatar?: string;
    bname?: string;
    skills?: string[];
}

export default function PersonalAbout1({ bio, bname, avatar, skills }: FitnessProps) {
    return (
        <div>
            <div className="flex flex-col gap-8 md:flex-row">
                <img src={avatar} alt="Alex Profile" className="w-full object-cover md:w-1/2" />
                <div className="flex flex-1 flex-col justify-center">
                    <p className="text-sm text-gray-400">
                        <AnimatedSkills skills={skills} />
                    </p>
                    <h2 className="text-4xl font-bold text-gray-900">Alex Smith</h2>
                    <p className="mt-4 text-sm leading-relaxed text-gray-600">
                        {bio ||
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-gray-600">
                        Aliquam mollis, leo nec commodo facilisis, turpis lorem dapibus erat, sed consectetur nunc nulla ac elit.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="mt-6 w-40 rounded border border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-50"
                    >
                        Download CV
                    </motion.button>
                </div>
            </div>
            <div className="mt-12">
                <h3 className="mb-6 inline-block border-b-4 border-blue-500 text-xl font-bold">What I Do</h3>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {[
                        {
                            title: 'Ecommerce',
                            icon: 'storefront',
                            desc: 'Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa.',
                        },
                        {
                            title: 'Copywriter',
                            icon: 'pencil',
                            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
                        },
                        {
                            title: 'Web Design',
                            icon: 'monitor',
                            desc: 'Ut non sodales odio. Pellentesque pellentesque, ipsum sit amet auctor accumsan.',
                        },
                        {
                            title: 'Management',
                            icon: 'flag',
                            desc: 'Ut ultricies ex lectus scelerisque nibh. Etiam sed augue euismod, tincidunt.',
                        },
                    ].map((item, i) => (
                        <motion.div key={i} whileHover={{ scale: 1.02 }} className="flex gap-4">
                            <img src={`/${item.icon}.svg`} alt={item.title} className="mt-1 h-6 w-6" />
                            <div>
                                <h4 className="text-lg font-semibold">{item.title}</h4>
                                <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

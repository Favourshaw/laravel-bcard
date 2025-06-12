import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import GooeyNav from '../ui/gooey-nav';
import ScrollToTop from '../ui/ScrollToTop';

const Section = ({ children, id }: { children: React.ReactNode; id: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

    return (
        <section id={id} ref={ref} className="relative flex h-screen w-full items-center justify-center overflow-hidden">
            <motion.div style={{ y, opacity }} className="flex h-full w-full items-center justify-center bg-gray-900">
                {children}
            </motion.div>
        </section>
    );
};

const items = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#products' },
];

export default function BusinessTheme() {
    return (
        <main className="w-full overflow-x-hidden bg-gray-900 text-white">
            <nav className="fixed top-0 z-50 flex w-full justify-around bg-gray-800 p-4 shadow-lg">Hero</nav>

            <div className="pt-0">
                <Section id="home">
                    <div className="relative flex h-full w-full items-center justify-center">
                        <img
                            src="https://images.pexels.com/photos/31970217/pexels-photo-31970217.jpeg?_gl=1*inxot7*_ga*MTI4NzQxNTc5Ni4xNzQ2ODg5NzQx*_ga_8JE65Q40S6*czE3NDk3Mjk3NTMkbzgkZzEkdDE3NDk3Mjk4MjUkajU5JGwwJGgw"
                            alt="Hero Background"
                            className="absolute h-full w-full object-cover opacity-30"
                        />
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="z-10 text-6xl font-bold"
                        >
                            Welcome to Our Site
                        </motion.h1>
                    </div>
                </Section>

                <Section id="about">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="max-w-2xl text-center"
                    >
                        <h2 className="mb-4 text-4xl">About Us</h2>
                        <p className="text-lg text-gray-300">
                            We are a company that values innovation and user experience, delivering top-notch products to our customers.
                        </p>
                    </motion.div>
                </Section>

                <Section id="products">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="grid grid-cols-1 gap-8 md:grid-cols-3"
                    >
                        {[1, 2, 3].map((n) => (
                            <div key={n} className="rounded-2xl bg-gray-800 p-6 shadow-lg transition-transform hover:scale-105">
                                <h3 className="mb-2 text-2xl">Product {n}</h3>
                                <p className="text-gray-400">Amazing features and performance in one package.</p>
                            </div>
                        ))}
                    </motion.div>
                </Section>

                <Section id="footer">
                    <motion.footer
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-center text-gray-400"
                    >
                        <p>&copy; 2025 Parallax Inc. All rights reserved.</p>
                    </motion.footer>
                </Section>
            </div>

            <div className="fixed bottom-0 left-1/2 z-50 mb-5 -translate-x-1/2 rounded-2xl bg-black p-5">
                <GooeyNav
                    items={items}
                    particleCount={15}
                    particleDistances={[90, 10]}
                    particleR={100}
                    initialActiveIndex={0}
                    animationTime={600}
                    timeVariance={300}
                    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                />
            </div>
            <ScrollToTop />
        </main>
    );
}

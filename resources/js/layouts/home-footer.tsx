import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white">
            <div className="px-4 py-16 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-primary mb-5 text-xl font-semibold md:text-3xl lg:text-4xl"
                >
                    Ready to make a memorable impression?
                </motion.h2>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mb-12 text-lg text-gray-500">
                    Join over 1,000+ users today and transform your networking game!
                </motion.p>
                <div className="flex w-full flex-col items-center justify-center space-y-4 md:w-auto md:flex-row md:space-y-0 md:space-x-4">
                    <Button variant="secondary" className="w-full md:w-auto">
                        Learn more
                    </Button>
                    <Button variant="default" className="w-full md:w-auto">
                        Get started
                    </Button>
                </div>
            </div>

            <div className="bg-[#002244] px-6 py-12 text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-7xl"
                >
                    <div className="mb-8 md:flex md:items-center md:justify-between">
                        <div>
                            <h3 className="mb-1 text-lg font-semibold md:text-xl">Join our newsletter</h3>
                            <p className="text-base text-gray-300">We’ll send you a nice letter once per week. No spam.</p>
                        </div>
                        <div className="mt-4 flex md:mt-0">
                            <input type="email" placeholder="Enter your email" className="mr-2 w-64 rounded-md bg-white px-4 py-2 text-black" />
                            <button className="bg-secondary rounded-md px-4 py-2 text-white hover:bg-blue-600">Subscribe</button>
                        </div>
                    </div>

                    <hr className="border-secondary my-15" />

                    <div className="grid max-w-full grid-cols-2 gap-0 text-sm md:grid-cols-4 lg:max-w-4xl">
                        <div className="mb-6">
                            <h4 className="text-secondary mb-4 font-semibold">Product</h4>
                            <ul className="space-y-3 text-base">
                                <li>Overview</li>
                                <li>Features</li>
                                <li>Pricing</li>
                            </ul>
                        </div>
                        <div className="mb-6">
                            <h4 className="text-secondary mb-4 font-semibold">Company</h4>
                            <ul className="space-y-3 text-base">
                                <li>About us</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className="mb-6">
                            <h4 className="text-secondary mb-4 font-semibold">Resources</h4>
                            <ul className="space-y-3 text-base">
                                <li>Newsletter</li>
                                <li>Support</li>
                            </ul>
                        </div>
                        <div className="mb-6">
                            <h4 className="text-secondary mb-4 font-semibold">Social</h4>
                            <ul className="space-y-3 text-base">
                                <li>Twitter</li>
                                <li>LinkedIn</li>
                                <li>Facebook</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;

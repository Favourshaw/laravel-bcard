import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import React from 'react';

export const Cta: React.FC = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mx-auto max-w-6xl rounded-xl bg-gray-50 p-6 text-center shadow-sm"
            >
                <div className="mb-6 flex justify-center">
                    <img src="storage/home/cta.svg" className="w-30 rounded-full border-2 border-white" />
                </div>

                <h2 className="text-primary mb-2 text-xl font-semibold">Still have questions?</h2>
                <p className="mb-4 text-base text-gray-500 lg:text-lg">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                <Button variant="default">Get in touch</Button>
            </motion.div>

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
        </>
    );
};

export default Cta;

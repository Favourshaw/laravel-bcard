import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import React from 'react';

export const Cta: React.FC = () => {
    return (
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
    );
};

export default Cta;

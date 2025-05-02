import { motion } from 'framer-motion';
import React from 'react';

interface AnimatedGridProps {
    items: React.ReactNode[];
}

const AnimatedGrid: React.FC<AnimatedGridProps> = ({ items }) => {
    return (
        <div className="overflow-x-auto">
            <motion.div
                className="flex gap-4"
                initial={{ x: 0 }}
                animate={{ x: items.length > 6 ? -100 : 0 }}
                transition={{ type: 'spring', stiffness: 100 }}
            >
                <div className="grid auto-cols-max grid-flow-col gap-4">
                    {items.map((item, index) => (
                        <div key={index} className="grid w-72 grid-rows-3 gap-2 sm:grid-cols-1 sm:grid-rows-2 lg:grid-cols-1 lg:grid-rows-3">
                            {item}
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default AnimatedGrid;

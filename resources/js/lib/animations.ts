import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: [0.42, 0, 0.58, 1],
        },
    }),
};

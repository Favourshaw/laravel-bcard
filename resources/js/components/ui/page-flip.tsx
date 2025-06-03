
import { motion, AnimatePresence } from 'framer-motion';
import { usePage } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function BookTransitionLayout({ children }: PropsWithChildren) {
    const { url } = usePage();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={url} // ensures animation runs on route change
                initial={{ rotateY: 0, opacity: 1 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                style={{
                    transformStyle: 'preserve-3d',
                    perspective: 1000,
                }}
                className="origin-left"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}

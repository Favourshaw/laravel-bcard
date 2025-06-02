import { motion } from 'framer-motion';
import { useState } from 'react';

interface MapEmbedProps {
    location?: string; // Optional in case nothing is passed
}

export default function DynamicMap({ location }: MapEmbedProps) {
    const [hasError, setHasError] = useState(false);

    const defaultLocation = 'New York, USA';
    const locationToUse = location?.trim() || defaultLocation;
    const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(locationToUse)}&z=15&output=embed`;

    return (
        <div className="mx-auto h-[400px] w-full max-w-6xl overflow-hidden rounded-lg shadow-lg">
            {!hasError ? (
                <motion.iframe
                    key="map"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src={embedUrl}
                    allowFullScreen
                    loading="lazy"
                    onError={() => setHasError(true)}
                ></motion.iframe>
            ) : (
                <motion.div
                    key="fallback"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex h-full w-full items-center justify-center bg-gray-100 text-center text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                >
                    📍 Map could not be loaded for this location.
                </motion.div>
            )}
        </div>
    );
}

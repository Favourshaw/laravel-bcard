import { motion } from 'framer-motion';

const features = [
    {
        icon: <img src="storage/home/ft-create.svg" alt="create" />,
        title: 'Create distinctive designs',
        description:
            'Unleash your creativity with our intuitive design tool. From sleek minimalism to vibrant expressions, your business card will reflect your unique style..',
    },
    {
        icon: <img src="storage/home/ft-connect.svg" alt="create" />,
        title: 'Connect with ease',
        description:
            'Effortlessly organize your social media handles and links on one sleek profile page. Seamlessly merge your digital presence with your offline interactions.',
    },
    {
        icon: <img src="storage/home/ft-share.svg" alt="create" />,
        title: 'Share with a scan',
        description:
            'Say goodbye to tedious manual sharing. A single scan of your personalized QR code opens a gateway to your comprehensive digital profile.',
    },

    {
        icon: <img src="storage/home/ft-brief.svg" alt="create" />,
        title: 'Share with a scan',
        description:
            ' Whether youre a budding entrepreneur, seasoned professional, or a creative soul, Showcase empowers you to showcase your identity in the modern world.',
    },
];

export default function Features() {
    return (
        <section className="bg-grey mt-6 w-full">
            <div className="mx-auto max-w-7xl px-4 py-16 text-center">
                <motion.h2
                    className="text-text md-text mb-4 font-bold"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Features
                </motion.h2>
                <motion.p className="text-text lg-text mb-10 font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                    Craft stunning business cards that make a statement
                </motion.p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="w-full max-w-[384px] p-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="mb-4 flex justify-center">{feature.icon}</div>
                            <h3 className="text-primary mb-2 text-lg font-semibold">{feature.title}</h3>
                            <p className="text-text text-base">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

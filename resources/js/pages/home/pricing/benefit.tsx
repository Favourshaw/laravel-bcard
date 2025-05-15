import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const benefits = [
    {
        icon: <img src="storage/home/pr-creative.svg" alt="creative" />,
        title: 'Unlimited creativity',
        description:
            'With our paid plans, you unlock access to a wider range of design tools, templates, and customization options to create business cards that truly represent your brand.',
    },
    {
        icon: <img src="storage/home/pr-visible.svg" alt="visible" />,
        title: 'Enhanced visibility',
        description:
            'Stand out with premium features like custom QR code designs, in-depth analytics, and priority support that help you make a lasting impression in the professional world.',
    },
    {
        icon: <img src="storage/home/pr-time.svg" alt="time" />,
        title: 'Time saving',
        description:
            'Access to our full template library and advanced tools speeds up the design process, allowing you to create stunning business cards quickly and efficiently.',
    },

    {
        icon: <img src="storage/home/pr-support.svg" alt="support" />,
        title: 'Priority support',
        description: 'Our paid users receive priority support to ensure your experience is seamless and hassle-free.',
    },

    {
        icon: <img src="storage/home/pr-exclusive.svg" alt="exclusive" />,
        title: 'Exclusive features',
        description:
            'As a Pro user, you get the first look at new features and templates, enabling you to stay ahead of the curve in your networking efforts.',
    },
];

export default function Benefit() {
    return (
        <section>
            <div className="mt-6 w-full">
                <div className="mx-auto max-w-7xl px-4 py-16 text-center">
                    <motion.h2
                        className="text-text md-text mb-10 font-bold"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Why Upgrade to a Paid Plan?
                    </motion.h2>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                className="w-full max-w-[384px] p-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                                <h3 className="text-primary mb-2 text-lg font-semibold">{benefit.title}</h3>
                                <p className="text-text text-base">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-grey px-4 py-16 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-primary mx-auto mb-5 max-w-2xl text-xl font-semibold md:text-3xl lg:text-4xl"
                >
                    Ready to Elevate Your Business Card Experience?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mx-auto mb-12 max-w-5xl text-lg text-gray-500"
                >
                    Choose the plan that suits you best and embark on a journey of creating impactful business cards and organized digital profiles.
                    Join Business Card Hub today and make a statement with every connection you make!
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
        </section>
    );
}

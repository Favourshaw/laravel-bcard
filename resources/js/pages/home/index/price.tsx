import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const pricingPlans = [
    {
        title: 'Free plan',
        price: 'NGN 0/mth',
        features: [
            'Access to Basic Design Tool',
            'Choose from Limited Pre-Made Templates',
            'Generate QR Code for Profile Page',
            'Organize Social Media Links',
            'Mobile-Responsive Profile Page',
            'Shareable Link to Profile Page',
            'Limited Analytics',
        ],
    },
    {
        title: 'Starter plan',
        subtitle: 'Billed annually.',
        price: 'NGN 2500/mth',
        features: [
            'Includes free plan features, plus',
            'Advanced Design Tool',
            'Access to Full Template Library',
            'Unlimited Customization Options',
            'Premium QR Code Design',
            'Enhanced Analytics',
            'Priority Email Support',
        ],
    },
    {
        title: 'Pro plan',
        subtitle: 'Billed annually.',
        price: 'NGN 5000/mth',
        features: [
            'Includes starter plan features, plus',
            'Premium Support with Live Chat',
            'VIP Access to New Templates and Features',
            'Unlimited Customization Options',
            'Priority Printing Service Integration',
            'Custom Domain for Profile Page',
            'Advanced User Analytics and Insights',
        ],
    },
];

export default function Price() {
    return (
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {pricingPlans.map((plan, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div>
                            <div className="flex min-h-47 flex-col items-center justify-between p-6">
                                <div>
                                    <h3 className="mb-1 text-lg font-semibold text-slate-800">{plan.title}</h3>
                                    {plan.subtitle && <p className="mb-2 text-sm text-slate-500">{plan.subtitle}</p>}
                                </div>
                                <p className="mb-4 text-2xl font-bold text-slate-900">{plan.price}</p>
                            </div>
                            <ul className="mb-6 space-y-4 text-left">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="text-muted flex items-start gap-4 text-base">
                                        <span className="h-6 w-6">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="24" height="24" rx="12" fill="#D1FADF" />
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M17.0964 7.39004L9.93641 14.3L8.03641 12.27C7.68641 11.94 7.13641 11.92 6.73641 12.2C6.34641 12.49 6.23641 13 6.47641 13.41L8.72641 17.07C8.94641 17.41 9.32641 17.62 9.75641 17.62C10.1664 17.62 10.5564 17.41 10.7764 17.07C11.1364 16.6 18.0064 8.41004 18.0064 8.41004C18.9064 7.49004 17.8164 6.68004 17.0964 7.38004V7.39004Z"
                                                    fill="#12B76A"
                                                />
                                            </svg>
                                        </span>

                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Button variant="default" size="full" className="mt-auto">
                            Get started
                        </Button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

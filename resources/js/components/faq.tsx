'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import FaqItem from './ui/faqItem';

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const data = [
        {
            title: 'What information do I need to provide during registration?',
            content:
                "You'll need to provide basic personal information, your Nigerian bank account details, and complete our verification process in compliance with financial regulations.",
        },
        {
            title: 'Do you offer technical support?',
            content: 'Yes, our team is available 24/7 to help you with any issues.',
        },
        {
            title: 'Can I cancel anytime?',
            content: 'Absolutely, there are no contracts or commitments.',
        },
    ];

    return (
        <section className="mt-10 bg-white lg:mt-26">
            <div className="text-primary pb-5 text-center text-base md:text-5xl">Frequently Asked Questions</div>
            <p className="text-center text-lg text-gray-500 md:text-xl">Everything you need to know about the product and billing.</p>

            <motion.div
                className="mx-auto max-w-5xl p-6"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.1,
                        },
                    },
                }}
            >
                {data.map((item, index) => (
                    <FaqItem key={index} title={item.title} isOpen={openIndex === index} onToggle={() => toggleItem(index)}>
                        <div className="max-w-[768px]">{item.content}</div>
                    </FaqItem>
                ))}
            </motion.div>
        </section>
    );
};

export default Faq;

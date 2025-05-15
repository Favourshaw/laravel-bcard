'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import FaqItem from './ui/faqItem';

type FaqItemType = {
    title: string;
    content: string;
};

type FaqProps = {
    data: FaqItemType[];
    heading?: string;
    subheading?: string;
};

const Faq = ({
    data,
    heading = 'Frequently Asked Questions',
    subheading = 'Everything you need to know about the product and billing.',
}: FaqProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <section className="mt-10 bg-white lg:mt-26">
            <div className="text-primary pb-5 text-center text-base md:text-5xl">{heading}</div>
            <p className="text-center text-lg text-gray-500 md:text-xl">{subheading}</p>

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

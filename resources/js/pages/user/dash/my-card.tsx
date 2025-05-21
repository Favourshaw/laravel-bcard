import { Link, useForm, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import * as CardComponents from '../templates/templates';

const styles = Object.keys(CardComponents);
const CARD_COMPONENTS = Object.values(CardComponents);

const presetGradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(to right, #ff758c, #ff7eb3)',
    'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
    'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
    'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
];

export default function MyCard() {
    const { props } = usePage();
    const user = props.auth.user;
    const [styleIndex, setStyleIndex] = useState(styles.indexOf(user.card_style || 'Card1'));

    const { data, setData, post } = useForm({
        card_style: styles[styleIndex],
        card_bg_type: user.card_bg_type || 'solid',
        card_bg_color: user.card_bg_color || '#ffffff',
        card_bg_gradient: user.card_bg_gradient || presetGradients[0],
        card_text_color: user.card_text_color || '#000000',
    });
    const CardComponent = CARD_COMPONENTS[styleIndex] || CARD_COMPONENTS[0];

    return (
        <div className="flex flex-row flex-wrap items-center justify-center gap-5 p-4 sm:justify-start">
            <motion.div
                className="h-[200px] w-full cursor-pointer sm:w-[350px]"
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ duration: 0.6 }}
            >
                <CardComponent
                    isBack={false}
                    bgColor={data.card_bg_color}
                    textColor={data.card_text_color}
                    bgGradient={data.card_bg_gradient}
                    bgType={data.card_bg_type}
                    user={user}
                />
            </motion.div>
            <motion.div
                className="h-full w-full cursor-pointer sm:h-[200px] sm:w-[350px]"
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ duration: 0.6 }}
            >
                <CardComponent
                    isBack={true}
                    bgColor={data.card_bg_color}
                    textColor={data.card_text_color}
                    bgGradient={data.card_bg_gradient}
                    bgType={data.card_bg_type}
                    user={user}
                />
            </motion.div>
            <motion.div
                className="flex max-h-[200px] w-[145px] cursor-pointer items-center justify-center"
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Link href="#" className="flex flex-col items-center justify-between gap-3">
                    <div>
                        <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="23.5" cy="23" r="23" fill="#001F3F" />
                            <path
                                d="M17.9795 22.9996H23.4995M29.0195 22.9996H23.4995M23.4995 22.9996V17.4796M23.4995 22.9996V28.5196"
                                stroke="white"
                                stroke-width="2.76"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                    <span className="text-primary text-base"> Create a new card</span>
                </Link>
            </motion.div>
        </div>
    );
}

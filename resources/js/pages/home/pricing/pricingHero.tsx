import { motion } from 'framer-motion';
import Price from '../index/price';

const Pricing = () => {
    return (
        <div className="relative overflow-hidden bg-white">
            <div className="pointer-events-none absolute inset-x-0 bottom-60 h-[60%] overflow-hidden lg:h-120">
                <img src="/storage/home/price-bg.png" alt="Background pattern" className="h-full w-full object-cover object-top" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 mx-auto max-w-7xl px-4 text-center"
            >
                <h2 className="text-primary my-8 flex flex-row items-center justify-center gap-2 text-xl font-bold md:text-4xl lg:my-12">
                    Plans for <span className="text-accent">everyone</span>
                    <motion.div
                        initial={{ rotate: -45, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
                        className="h-[30px] w-[30px] md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px]"
                    >
                        <svg viewBox="0 0 63 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.0873 64.7906C6.82675 64.6195 6.58092 64.4013 6.35916 64.1341C5.68432 63.3101 5.54924 62.2813 5.46172 61.5999L1.86377 33.3537C1.12349 27.5434 0.202178 20.3176 3.19701 14.14C4.40641 11.6441 6.29678 9.24687 8.97984 6.80295C11.5901 4.43281 18.4064 -0.799312 25.3587 1.74835C29.2983 3.19284 32.444 7.15486 33.5652 12.0889C34.5118 16.2518 34.0861 20.6157 33.6665 24.5136C41.5833 21.8275 50.1858 20.1834 56.4844 25.1462C63.6031 30.761 62.9097 42.1615 57.8366 48.8868C52.3261 56.1919 43.0095 59.4418 36.4809 61.2485C28.0055 63.6002 19.2566 65.0105 10.4764 65.444C9.70616 65.4812 8.24841 65.5531 7.09297 64.7943L7.0873 64.7906ZM26.0912 5.13864C25.5758 4.80017 25.0175 4.51459 24.424 4.29502C18.8584 2.25278 13.0443 6.7735 10.8 8.80859C8.37451 11.0084 6.68331 13.1393 5.63327 15.3185C2.99223 20.7722 3.86158 27.5586 4.55235 33.0123L8.1503 61.2585C8.19821 61.6546 8.27159 62.1971 8.44981 62.4195C8.7721 62.8175 9.90855 62.7534 10.335 62.7336C18.9161 62.3072 27.466 60.9283 35.752 58.6305C41.8999 56.9222 50.6541 53.8865 55.6714 47.2461C59.9887 41.5237 60.6966 31.9156 54.8062 27.2695C48.999 22.6942 40.3051 24.959 32.5527 27.7774C31.848 28.0358 31.0674 27.6691 30.8144 26.9681C30.6227 26.4452 30.7784 25.8748 31.1593 25.5171C30.9789 25.2609 30.892 24.9364 30.931 24.6055C31.3577 20.6474 31.8004 16.5539 30.9217 12.6949C30.3166 10.0366 28.7533 6.88679 26.0912 5.13864Z"
                                fill="#2ECC40"
                                stroke="#2ECC40"
                                stroke-width="2"
                            />
                        </svg>
                    </motion.div>
                </h2>
                <p className="text-text mx-auto mb-12 max-w-4xl">
                    We've designed pricing plans to cater to different needs and preferences. Choose the plan that aligns with your requirements and
                    enjoy a seamless experience in creating, sharing, and managing your business cards and digital profiles.
                </p>

                <Price />
            </motion.div>
        </div>
    );
};

export default Pricing;

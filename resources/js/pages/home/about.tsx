import HomeLayout from '@/layouts/home-layout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import ContactUs from './contactUs';

export default function About() {
    const paragraphs = [
        'At Showcaxe, we believe in the power of meaningful connections. In a world where networking is vital, we set out on a mission to redefine how professionals and creatives present themselves and connect with others.',
        "Founded by a team of passionate designers and tech enthusiasts, Showcaxe is more than just a business card platform. It's a dynamic space where creativity, technology, and networking converge to create a seamless and impactful experience.",
        "Our journey began with the realization that traditional business cards no longer encompass the entirety of one's identity. We envisioned a platform that would not only allow you to craft stunning business card designs but also provide a comprehensive digital profile—allowing you to showcase your entire online presence with a single scan.",
        "From our innovative design tools to our meticulous attention to user experience, every aspect of Showcaxe is designed to empower you. Whether you're an entrepreneur, a professional, or a creative spirit, we are dedicated to helping you make lasting impressions and connections that matter.",
        "Join us on this journey of transformation. Embrace the future of networking with Showcaxe—where your business card is more than a piece of paper; it's a gateway to your story, your passions, and your potential.",
        'Welcome to a new era of networking, The Showcaxe Team',
    ];

    return (
        <HomeLayout>
            <Head title="About" />
            <section className="mx-auto flex max-w-7xl flex-col items-center justify-center bg-white px-4 pt-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-primary mb-4 flex max-w-xl flex-wrap items-center justify-center gap-x-1 text-xl font-semibold md:text-3xl lg:text-4xl"
                >
                    <span>Crafting Connections Through </span>

                    <span className="flex items-center">
                        <span className="text-accent mr-1">Innovative Design</span>
                        <span className="flex items-center">
                            <motion.div
                                initial={{ rotate: -45, scale: 0 }}
                                animate={{ rotate: 0, scale: 1 }}
                                transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
                                className="h-[30px] w-[30px] md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px]"
                            >
                                <svg width="45" height="38" viewBox="0 0 45 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0.483614 23.9812C0.483614 23.9812 0.475497 23.9759 0.470083 23.9723C0.177636 23.77 0.100069 23.3684 0.304113 23.0733C5.1441 16.0204 8.46771 10.4817 13.0009 1.90566C13.168 1.59036 13.5585 1.4709 13.8739 1.63806C14.1911 1.80252 14.3089 2.19569 14.1445 2.51275C9.58665 11.1383 6.24457 16.7113 1.37188 23.8084C1.17136 24.098 0.778653 24.1736 0.486323 23.9829L0.483614 23.9812Z"
                                        fill="#2ECC40"
                                    />
                                    <path
                                        d="M19.9796 7.22554C16.7423 5.1138 14.0946 3.34039 13.326 2.76187C13.0406 2.5487 12.9809 2.14332 13.1958 1.85533C13.4089 1.57005 13.8143 1.5105 14.1024 1.72543C15.86 3.04161 29.5546 12.0019 34.7929 14.9561C35.103 15.1313 35.2136 15.5237 35.0394 15.8381C34.8642 16.1481 34.4718 16.2586 34.1572 16.0843C30.9698 14.2866 24.8139 10.379 19.9796 7.22554Z"
                                        fill="#2ECC40"
                                    />
                                    <path
                                        d="M0.994294 24.6653C0.718205 24.4852 0.620406 24.1205 0.775141 23.8241C0.942232 23.5088 1.32999 23.3876 1.64715 23.5521C3.36735 24.4582 6.62521 26.568 10.0726 28.8013C15.004 31.9951 21.1418 35.9718 22.7677 36.3304C23.1181 36.4085 23.3375 36.7523 23.2595 37.1026C23.1833 37.4501 22.8378 37.6722 22.4902 37.5958C20.6388 37.1866 14.9098 33.4764 9.3702 29.8899C5.94721 27.6724 2.71366 25.5786 1.04572 24.6988C1.02948 24.6882 1.01054 24.6759 0.994294 24.6653Z"
                                        fill="#2ECC40"
                                    />
                                    <path
                                        d="M22.209 37.5359C21.9221 37.3488 21.8304 36.9688 22.003 36.6687C24.2769 32.7865 26.2964 29.2824 28.25 25.8972C30.2018 22.5147 32.2224 19.015 34.4918 15.1338C34.6724 14.8273 35.0684 14.7231 35.3749 14.9038C35.6815 15.0845 35.7859 15.4804 35.6053 15.7869C33.3349 19.6636 31.3162 23.1606 29.3644 26.5431C27.409 29.931 25.3895 33.4351 23.1138 37.32C22.9332 37.6264 22.5372 37.7307 22.2306 37.55C22.2225 37.5447 22.2117 37.5377 22.2036 37.5324L22.209 37.5359Z"
                                        fill="#2ECC40"
                                    />
                                    <path
                                        d="M13.9308 2.65105C13.7792 2.55217 13.6709 2.39285 13.6421 2.20046C13.591 1.84698 13.8378 1.52192 14.1913 1.47094L22.5567 0.281846C22.9102 0.23087 23.2354 0.477683 23.2865 0.831163C23.3376 1.18464 23.0908 1.50971 22.7373 1.56068L14.3719 2.74978C14.2108 2.77197 14.0535 2.73499 13.9263 2.652L13.9308 2.65105Z"
                                        fill="#2ECC40"
                                    />
                                    <path
                                        d="M34.449 16.2168C34.2974 16.1179 34.1864 15.9568 34.1621 15.7635C34.1137 15.4118 34.3595 15.0822 34.714 15.0357L35.1382 14.9769C37.8018 14.6083 41.1197 14.1536 43.2023 13.599C43.5474 13.5078 43.899 13.714 43.9921 14.0563C44.0835 14.4013 43.88 14.7547 43.5332 14.8486C41.3727 15.4219 38.0119 15.8833 35.3143 16.2567L34.8901 16.3155C34.729 16.3377 34.5735 16.298 34.449 16.2168Z"
                                        fill="#2ECC40"
                                    />
                                    <path
                                        d="M22.187 37.753C22.0544 37.6665 21.9508 37.5295 21.9133 37.3623C21.8309 37.0154 22.0424 36.6674 22.3911 36.5824C24.0425 36.1862 25.3476 35.8417 26.6134 35.5102C27.8836 35.1778 29.1976 34.8315 30.8597 34.4307C31.2066 34.3484 31.5547 34.5601 31.6398 34.9087C31.7222 35.2556 31.5106 35.6036 31.162 35.6886C29.5133 36.0866 28.2055 36.4293 26.9442 36.7598C25.6722 37.095 24.36 37.4386 22.6951 37.8376C22.5154 37.8824 22.3349 37.8456 22.1915 37.752L22.187 37.753Z"
                                        fill="#2ECC40"
                                    />
                                    <path
                                        d="M33.0278 8.21554C29.9692 6.22032 26.6279 4.01372 23.0192 1.60184C22.7232 1.40491 22.6429 1.00153 22.8398 0.705649C23.0366 0.409771 23.4356 0.330572 23.7306 0.523031L23.736 0.526555C31.6428 5.80775 38.2688 10.1185 43.4219 13.3334C43.7296 13.5302 43.8187 13.92 43.6281 14.2239C43.4376 14.5278 43.0415 14.6204 42.7375 14.4298C39.926 12.6768 36.6792 10.5974 33.0251 8.21377L33.0278 8.21554Z"
                                        fill="#2ECC40"
                                    />
                                    <path
                                        d="M30.4364 35.7244C30.1413 35.5319 30.053 35.1349 30.2445 34.8355C35.2113 27.0322 38.6702 20.9607 42.6769 13.9312C42.8521 13.6212 43.2472 13.5125 43.56 13.6895C43.871 13.8693 43.9789 14.2599 43.802 14.5726C39.7892 21.6173 36.3214 27.7023 31.336 35.5283C31.1445 35.8277 30.7457 35.9185 30.4435 35.7253L30.4381 35.7217L30.4364 35.7244Z"
                                        fill="#2ECC40"
                                    />
                                    <path
                                        d="M7.58732 28.1097L7.58191 28.1062C7.28416 27.912 7.20389 27.5086 7.40252 27.21C11.767 20.6376 15.865 13.7758 19.5802 6.81457C19.7473 6.49927 20.1404 6.3816 20.4558 6.54876C20.7685 6.71416 20.889 7.10907 20.722 7.42437C16.9865 14.4225 12.87 21.3186 8.47992 27.9244C8.28576 28.222 7.88683 28.3012 7.58909 28.107L7.58732 28.1097Z"
                                        fill="#2ECC40"
                                    />
                                    <path
                                        d="M14.7007 32.7499L14.6953 32.7464C14.3975 32.5522 14.3172 32.1488 14.5159 31.8502C18.8803 25.2778 22.9783 18.4159 26.6935 11.4548C26.8606 11.1395 27.2538 11.0218 27.5692 11.189C27.8819 11.3544 28.0024 11.7493 27.8353 12.0646C24.0999 19.0627 19.9834 25.9588 15.5933 32.5646C15.3991 32.8622 15.0002 32.9414 14.7024 32.7472L14.7007 32.7499Z"
                                        fill="#2ECC40"
                                    />
                                    <path
                                        d="M11.2972 11.6215C10.7234 11.2472 10.1468 10.8712 9.5783 10.4887C9.28055 10.2945 9.20028 9.89111 9.39891 9.59253C9.59307 9.29489 10.0063 9.21733 10.2951 9.41344C16.868 13.782 23.7339 17.8789 30.6971 21.5957C31.0098 21.7611 31.1303 22.156 30.9633 22.4713C30.7962 22.7866 30.403 22.9043 30.0876 22.7372C23.693 19.3257 17.382 15.5908 11.2999 11.6233L11.2972 11.6215Z"
                                        fill="#2ECC40"
                                    />
                                    <path
                                        d="M7.12 18.6285C6.54616 18.2542 5.97504 17.8816 5.4092 17.5009C5.11146 17.3067 5.03119 16.9033 5.22982 16.6047C5.42398 16.3071 5.82291 16.2279 6.12066 16.4221L6.12607 16.4257C12.7016 20.796 19.5648 24.8911 26.528 28.6079C26.8407 28.7733 26.9612 29.1683 26.7941 29.4836C26.6271 29.7989 26.2339 29.9165 25.9185 29.7494C19.5212 26.3361 13.2075 22.5995 7.12271 18.6303L7.12 18.6285Z"
                                        fill="#2ECC40"
                                    />
                                    <path
                                        d="M30.4651 23.1994C30.2946 23.0882 30.177 22.8958 30.1703 22.6754C30.1604 22.3179 30.4415 22.023 30.799 22.0132C33.2694 21.9468 35.7696 21.8227 38.2318 21.6506C38.5882 21.6247 38.8975 21.8959 38.9208 22.2505C38.9468 22.6069 38.6757 22.9161 38.321 22.9393C35.8428 23.1124 33.3237 23.2358 30.8328 23.3042C30.6957 23.3074 30.5689 23.271 30.4606 23.2004L30.4651 23.1994Z"
                                        fill="#2ECC40"
                                    />
                                    <path
                                        d="M26.3726 30.331C26.2047 30.2215 26.0908 30.0354 26.0788 29.8231C26.0599 29.4675 26.3347 29.1646 26.6903 29.1459C29.1735 29.0184 31.6923 28.9488 34.182 28.9413C34.537 28.9414 34.8285 29.228 34.8312 29.5846C34.8339 29.9412 34.5447 30.2309 34.188 30.2335C31.7215 30.2407 29.2234 30.3083 26.759 30.4365C26.6157 30.4433 26.4835 30.4034 26.3726 30.331Z"
                                        fill="#2ECC40"
                                    />
                                    <path
                                        d="M20.48 7.16239C20.3419 7.07234 20.2374 6.93088 20.2007 6.75649C20.1272 6.40771 20.3514 6.06405 20.7002 5.99072L29.0678 4.22448C29.4166 4.15115 29.7604 4.37539 29.8339 4.72417C29.9073 5.07295 29.6831 5.41661 29.3343 5.48994L20.9667 7.25618C20.7923 7.29285 20.619 7.25691 20.4782 7.16509L20.48 7.16239Z"
                                        fill="#2ECC40"
                                    />
                                    <path
                                        d="M27.2381 11.8563C27.0946 11.7627 26.9882 11.6123 26.9541 11.428C26.8896 11.0774 27.1246 10.7408 27.4752 10.6764L35.8965 9.16502C36.2472 9.10063 36.5839 9.33571 36.6484 9.68637C36.7129 10.037 36.4779 10.3736 36.1273 10.438L27.706 11.9494C27.5369 11.9779 27.3725 11.9401 27.2398 11.8536L27.2381 11.8563Z"
                                        fill="#2ECC40"
                                    />
                                    <path
                                        d="M26.4443 36.6034C26.1682 36.4233 26.0713 36.0632 26.2233 35.765C29.7845 28.9039 33.9089 22.2559 37.9055 15.8216C37.8978 15.7742 37.8991 15.7249 37.9031 15.6774C37.9298 15.3939 38.1425 15.1508 38.4267 15.07C38.7046 14.9929 38.996 15.0904 39.1704 15.3199C39.2449 15.4186 39.4573 15.7732 39.1734 16.2321C35.1362 22.7287 30.9605 29.4435 27.373 36.3568C27.2086 36.6739 26.8191 36.7978 26.502 36.6333C26.483 36.621 26.4668 36.6104 26.4478 36.598L26.4443 36.6034Z"
                                        fill="#2ECC40"
                                    />
                                    <path
                                        d="M38.2059 15.3079L38.1978 15.3026L21.78 4.28816C20.7629 3.60544 19.708 2.89803 18.6333 2.27413C18.3277 2.0979 18.2205 1.70016 18.3985 1.39192C18.5764 1.08368 18.9724 0.979393 19.2807 1.15738C20.3924 1.80153 21.4636 2.51957 22.4995 3.21465L38.9173 14.229C39.2133 14.426 39.2936 14.8294 39.0923 15.1262C38.8972 15.4194 38.4982 15.4985 38.2032 15.3061L38.2059 15.3079Z"
                                        fill="#2ECC40"
                                    />
                                </svg>
                            </motion.div>
                        </span>
                    </span>
                </motion.div>

                <div className="my-8 w-full md:my-12 lg:my-20">
                    {paragraphs.map((text, index) => (
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="text-text mb-6 w-full text-left text-base sm:text-lg"
                        >
                            {text}
                        </motion.p>
                    ))}
                </div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="mt-10 w-full">
                    <img src="storage/home/about-img.png" alt="About" className="h-auto w-full object-contain" />
                </motion.div>
            </section>
            <ContactUs />
        </HomeLayout>
    );
}

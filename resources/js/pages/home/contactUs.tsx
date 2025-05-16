import { Button } from '@/components/ui/button'; // assuming you're using a custom Button too
import { Input } from '@/components/ui/input'; // adjust the import path as needed
import { Label } from '@/components/ui/label';
import { fadeInUp } from '@/lib/animations';
import { motion } from 'framer-motion';
import * as React from 'react';

export default function ContactSection() {
    const [agree, setAgree] = React.useState(false);

    return (
        <section className="bg-grey mt-7 px-4 py-18">
            <div className="mx-auto max-w-2xl text-center">
                <motion.p
                    custom={0}
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    className="text-primary text-sm font-medium md:text-base lg:text-xl"
                >
                    Contact us
                </motion.p>
                <motion.h2
                    custom={1}
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    className="text-text mt-3 text-3xl font-bold tracking-tight md:text-[32px]"
                >
                    Get in touch
                </motion.h2>
                <motion.p custom={2} variants={fadeInUp} initial="hidden" animate="visible" className="text-muted mt-6 text-lg md:text-xl">
                    We’d love to hear from you. Please fill out this form.
                </motion.p>
            </div>

            <form className="mx-auto mt-12 max-w-lg space-y-6">
                <motion.div className="grid grid-cols-1 gap-6 sm:grid-cols-2" initial="hidden" animate="visible">
                    {['First name', 'Last name'].map((label, i) => (
                        <motion.div key={label} custom={i} variants={fadeInUp}>
                            <Label htmlFor={label.toLowerCase()}>{label}</Label>
                            <Input id={label.toLowerCase()} type="text" placeholder={label} className="mt-1" />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div custom={3} variants={fadeInUp} initial="hidden" animate="visible">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@company.com" className="mt-1" />
                </motion.div>

                <motion.div custom={4} variants={fadeInUp} initial="hidden" animate="visible">
                    <Label htmlFor="phone">Phone number</Label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                        <select className="rounded-l-md border border-gray-300 bg-white px-2 text-sm text-gray-700 focus:border-blue-500 focus:ring-blue-500">
                            <option>NGN</option>
                            <option>USA</option>
                        </select>
                        <Input id="phone" type="tel" placeholder="+234 815 610 8999" className="rounded-none rounded-r-md" />
                    </div>
                </motion.div>

                <motion.div custom={5} variants={fadeInUp} initial="hidden" animate="visible">
                    <Label htmlFor="message">Message</Label>
                    <textarea
                        id="message"
                        rows={4}
                        placeholder="Message"
                        className="mt-1 w-full resize-none rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                    />
                </motion.div>

                <motion.div custom={6} variants={fadeInUp} initial="hidden" animate="visible" className="flex items-center gap-2">
                    <input
                        id="agree"
                        type="checkbox"
                        checked={agree}
                        onChange={() => setAgree(!agree)}
                        className="text-primary mt-1 h-4 w-4 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <Label htmlFor="agree">
                        You agree to our friendly
                        <a href="#" className="text-primary font-medium hover:underline">
                            privacy policy
                        </a>
                        .
                    </Label>
                </motion.div>

                <motion.div custom={7} variants={fadeInUp} initial="hidden" animate="visible">
                    <Button type="submit" size="full">
                        Send message
                    </Button>
                </motion.div>
            </form>
        </section>
    );
}

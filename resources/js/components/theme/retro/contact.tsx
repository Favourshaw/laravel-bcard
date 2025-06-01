import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export interface NavProps {
    github: string;
    bmail?: string;
    linkedin?: string;
}

const Contact: React.FC<NavProps> = ({ github, bmail, linkedin }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="relative px-4 py-20">
            <div className="container mx-auto max-w-6xl" ref={ref}>
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="mb-4 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text font-mono text-5xl font-bold text-transparent">
                        CONTACT.send()
                    </h2>
                    <div className="mx-auto h-1 w-24 bg-gradient-to-r from-pink-500 to-cyan-400"></div>
                </motion.div>

                <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
                    {/* Contact Info */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="bg-opacity-50 border-opacity-30 rounded-lg border border-cyan-400 bg-black p-6 backdrop-blur-sm">
                            <h3 className="mb-6 font-mono text-2xl font-bold text-cyan-400">&gt; Let's Connect</h3>

                            <div className="space-y-4">
                                <motion.div className="flex items-center space-x-4" whileHover={{ x: 10 }} transition={{ duration: 0.3 }}>
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500">
                                        <span className="font-mono font-bold text-black">@</span>
                                    </div>
                                    <div>
                                        <p className="font-mono text-white">EMAIL.send()</p>
                                        <p className="font-mono text-sm text-gray-400">{bmail}</p>
                                    </div>
                                </motion.div>

                                <motion.div className="flex items-center space-x-4" whileHover={{ x: 10 }} transition={{ duration: 0.3 }}>
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-pink-500 to-purple-500">
                                        <span className="font-mono font-bold text-white">#</span>
                                    </div>
                                    <div>
                                        <p className="font-mono text-white">LINKEDIN.connect()</p>
                                        <p className="font-mono text-sm text-gray-400">{linkedin ? linkedin : 'linkedin.com/in/johndoe'}</p>
                                    </div>
                                </motion.div>

                                <motion.div className="flex items-center space-x-4" whileHover={{ x: 10 }} transition={{ duration: 0.3 }}>
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-cyan-400">
                                        <span className="font-mono font-bold text-white">&lt;/&gt;</span>
                                    </div>
                                    <div>
                                        <p className="font-mono text-white">GITHUB.clone()</p>
                                        <p className="font-mono text-sm text-gray-400">{github ? github : 'github.com/johndoe'}</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* ASCII Art */}
                        <motion.div
                            className="bg-opacity-50 border-opacity-30 rounded-lg border border-pink-500 bg-black p-6 backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 1, delay: 0.8 }}
                        >
                            <pre className="font-mono text-xs leading-tight text-cyan-400">
                                {`   ████████╗███████╗ ██████╗██╗  ██╗
   ╚══██╔══╝██╔════╝██╔════╝██║  ██║
      ██║   █████╗  ██║     ███████║
      ██║   ██╔══╝  ██║     ██╔══██║
      ██║   ███████╗╚██████╗██║  ██║
      ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝`}
                            </pre>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="mb-2 block font-mono text-sm text-cyan-400">NAME.input()</label>
                                <motion.input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="bg-opacity-50 w-full rounded-lg border border-gray-600 bg-black px-4 py-3 font-mono text-white transition-colors focus:border-cyan-400 focus:outline-none"
                                    placeholder="Enter your name..."
                                    whileFocus={{ scale: 1.02 }}
                                    required
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-mono text-sm text-pink-500">EMAIL.validate()</label>
                                <motion.input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="bg-opacity-50 w-full rounded-lg border border-gray-600 bg-black px-4 py-3 font-mono text-white transition-colors focus:border-pink-500 focus:outline-none"
                                    placeholder="your.email@domain.com"
                                    whileFocus={{ scale: 1.02 }}
                                    required
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-mono text-sm text-purple-400">MESSAGE.compose()</label>
                                <motion.textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={6}
                                    className="bg-opacity-50 w-full resize-none rounded-lg border border-gray-600 bg-black px-4 py-3 font-mono text-white transition-colors focus:border-purple-400 focus:outline-none"
                                    placeholder="Write your message here..."
                                    whileFocus={{ scale: 1.02 }}
                                    required
                                />
                            </div>

                            <motion.button
                                type="submit"
                                className="w-full rounded-lg bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 py-4 font-mono font-bold text-black hover:shadow-lg hover:shadow-cyan-400/25"
                                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 255, 0.3)' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                SEND_MESSAGE.execute()
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

import AnimatedBg from '@/components/ui/animated-bg';
import { UsersPgProps } from '@/types/userPgProps';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, MailIcon } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTiktok, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import LinkCard from './links/link-card';
import LinkHeader from './links/link-header';

export default function Links({ profileData }: UsersPgProps) {
    const { user, profile = {} } = profileData;
    if (!user) return null;
    const getStorageUrl = (path: string | undefined, fallback: string) => (path ? `/storage/${path.replace(/^\/?storage\//, '')}` : fallback);
    const logoUrl = getStorageUrl(profile.logo, '/storage/logos/logos.png');
    const primaryColor: string = user.colors?.primary || '#05df72';

    const socialLinks = [
        {
            id: 'instagram',
            title: 'Instagram',
            image: (
                <Instagram
                    className="h-full w-full"
                    style={{
                        backgroundImage: `linear-gradient(90deg, ${primaryColor}, white)`,
                    }}
                />
            ),
            url: profile.instagram,
        },
        {
            id: 'whatsapp',
            title: 'WhatsApp',
            image: (
                <FaWhatsapp
                    className="h-full w-full"
                    style={{
                        backgroundImage: `linear-gradient(90deg, ${primaryColor}, white)`,
                    }}
                />
            ),
            url: profile.whatsapp,
        },
        {
            id: 'facebook',
            title: 'Facebook',
            image: (
                <Facebook
                    className="h-full w-full"
                    style={{
                        backgroundImage: `linear-gradient(90deg, ${primaryColor}, white)`,
                    }}
                />
            ),
            url: profile.facebook,
        },
        {
            id: 'twitter',
            title: 'Twitter',
            image: (
                <FaTwitter
                    className="h-full w-full"
                    style={{
                        backgroundImage: `linear-gradient(90deg, ${primaryColor}, white)`,
                    }}
                />
            ),
            url: profile.twitter,
        },
        {
            id: 'tiktok',
            title: 'TikTok',
            image: (
                <FaTiktok
                    className="h-full w-full"
                    style={{
                        backgroundImage: `linear-gradient(90deg, ${primaryColor}, white)`,
                    }}
                />
            ),
            url: profile.tiktok,
        },
        {
            id: 'linkedin',
            title: 'LinkedIn',
            image: (
                <FaLinkedin
                    className="h-full w-full"
                    style={{
                        backgroundImage: `linear-gradient(90deg, ${primaryColor}, white)`,
                    }}
                />
            ),
            url: profile.linkedin,
        },
        {
            id: 'github',
            title: 'GitHub',
            image: (
                <FaGithub
                    className="h-full w-full"
                    style={{
                        backgroundImage: `linear-gradient(90deg, ${primaryColor}, white)`,
                    }}
                />
            ),
            url: profile.github,
        },
        {
            id: 'bmail',
            title: 'Bmail',
            image: (
                <MailIcon
                    className="h-full w-full"
                    style={{
                        backgroundImage: `linear-gradient(90deg, ${primaryColor}, white)`,
                    }}
                />
            ),
            url: profile.bmail,
        },
    ]
        .filter((link) => !!link.url)
        .map((link) => {
            return {
                ...link,
                description: `Follow us on ${link.title}`, // fallback to logo if no meta image
            };
        });

    return (
        <div className="relative min-h-screen">
            <Head title={`${user.name} - Links`} />
            <AnimatedBg primaryColor={primaryColor} />

            <div className="relative z-10">
                <div className="container mx-auto max-w-2xl px-4 py-12">
                    <LinkHeader bname={profile.bname} bio={profile.bio} logo={logoUrl} />

                    <motion.div className="space-y-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.6 }}>
                        {socialLinks.map((link, index) => (
                            <LinkCard
                                key={link.id}
                                title={link.title}
                                description={link.description}
                                image={link.image}
                                url={link.url}
                                delay={0.9 + index * 0.1}
                            />
                        ))}
                    </motion.div>

                    <motion.footer
                        className="mt-16 pb-8 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 0.6 }}
                    >
                        <p className="text-sm text-gray-400">Made with ❤️ using React & Framer Motion</p>
                    </motion.footer>
                </div>
            </div>
        </div>
    );
}

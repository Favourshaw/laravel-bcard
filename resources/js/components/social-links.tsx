import { motion } from 'framer-motion';
import { CheckCircle, Copy } from 'lucide-react';
import { useState } from 'react';

type SocialLinkProps = {
    icon: React.ReactNode;
    label: string;
    value: string;
};

export default function SocialLink({ icon, label, value }: SocialLinkProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(value);
            setCopied(true);
            alert(`${label} copied to clipboard`);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            alert('Failed to copy');
        }
    };

    return (
        <div className="flex flex-col gap-1">
            <label className="text-muted text-sm font-medium">{label}</label>
            <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex cursor-pointer items-center gap-2 rounded-md border border-gray-200 bg-white px-6 py-4 shadow-sm transition-all"
                onClick={handleCopy}
            >
                <span className="text-xl">{icon}</span>
                <span className="text-text flex-1 truncate text-base">{value}</span>
                {copied ? <CheckCircle className="text-accent h-4 w-4" /> : <Copy className="h-4 w-4 text-gray-400" />}
            </motion.div>
        </div>
    );
}

// resources/js/Components/FlashMessages.tsx
import { SharedData } from '@/types'; // Adjust import path to your types
import { usePage } from '@inertiajs/react';
import { X } from 'lucide-react'; // Import your preferred icon
import { useEffect, useState } from 'react';

export default function FlashMessages() {
    const { flash } = usePage<SharedData>().props;
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (flash) {
            setVisible(true);
            const timer = setTimeout(() => setVisible(false), 5000); // Auto-hide after 5s
            return () => clearTimeout(timer);
        }
    }, [flash]);

    if (!visible || !flash) return null;

    return (
        <div className="fixed top-4 right-4 z-50 space-y-2">
            {flash.success && <Message type="success" message={flash.success} onDismiss={() => setVisible(false)} />}
            {flash.error && <Message type="error" message={flash.error} onDismiss={() => setVisible(false)} />}
            {flash.warning && <Message type="warning" message={flash.warning} onDismiss={() => setVisible(false)} />}
            {flash.info && <Message type="info" message={flash.info} onDismiss={() => setVisible(false)} />}
        </div>
    );
}

function Message({ type, message, onDismiss }: { type: 'success' | 'error' | 'warning' | 'info'; message: string; onDismiss: () => void }) {
    const colors = {
        success: 'bg-green-100 text-green-800 border-green-300',
        error: 'bg-red-100 text-red-800 border-red-300',
        warning: 'bg-yellow-100 text-yellow-800 border-yellow-300',
        info: 'bg-blue-100 text-blue-800 border-blue-300',
    };

    return (
        <div className={`${colors[type]} flex items-center justify-between rounded-md border p-4`}>
            <span>{message}</span>
            <button onClick={onDismiss} className="ml-4">
                <X className="h-4 w-4" />
            </button>
        </div>
    );
}

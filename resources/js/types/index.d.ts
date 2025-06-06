import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface FlashMessages {
    success?: string;
    error?: string;
    warning?: string;
    info?: string;
}

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    flash?: FlashMessages; // Added flash messages
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown;
}

export interface ProfileFormData {
    _method: string;
    logo: File | null;
    avatar: File | null;
    phone: string;
    bio: string;
    location: string;
    facebook: string;
    twitter: string;
    instagram: string;
    tiktok: string;
    whatsapp: string;
    qr: File | null;
    skills: Record<string, string>;

    [key: string]: string | File | null;
}

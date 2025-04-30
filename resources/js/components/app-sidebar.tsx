import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { BrainCog, ChartNoAxesColumnIncreasing, CircleUser, Headset, LayoutGrid, PencilRuler } from 'lucide-react';
import AppLogo from './app-logo';
export function AppSidebar() {
    const { auth } = usePage().props;
    const userRole = auth?.user?.user || 'user';

    const mainNavItems: NavItem[] = [
        {
            title: 'Dashboard',
            href: '/dashboard',
            icon: LayoutGrid,
        },

        {
            title: 'Design Template',
            href: '/template',
            icon: PencilRuler,
        },

        {
            title: 'Analytic',
            href: '/analytic',
            icon: ChartNoAxesColumnIncreasing,
        },
        {
            title: 'Profile',
            href: '/profile',
            icon: CircleUser,
        },
    ];

    const adminNavItems: NavItem[] = [
        {
            title: 'Manage Users',
            href: '/users',
            icon: CircleUser,
        },
    ];

    const superAdminNavItems: NavItem[] = [
        {
            title: 'Manage Users',
            href: '/users',
            icon: CircleUser,
        },
    ];

    let roleBasedNavItems = [...mainNavItems];

    if (userRole.includes('admin')) {
        // More flexible check
        roleBasedNavItems = [...roleBasedNavItems, ...adminNavItems];
    }

    if (userRole.includes('superadmin')) {
        roleBasedNavItems = [...roleBasedNavItems, ...superAdminNavItems];
    }

    const footerNavItems: NavItem[] = [
        {
            title: 'Settings',
            href: '/settings',
            icon: BrainCog,
        },
        {
            title: 'Support',
            href: '/support',
            icon: Headset,
        },
    ];
    console.log('Current user role:', userRole, 'Type:', typeof userRole);

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={roleBasedNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}

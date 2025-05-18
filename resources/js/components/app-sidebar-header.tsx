import { Breadcrumbs } from '@/components/breadcrumbs';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { type BreadcrumbItem as BreadcrumbItemType } from '@/types';
import AppLogo from './app-logo';
import { Button } from './ui/button';

export function AppSidebarHeader({ breadcrumbs = [] }: { breadcrumbs?: BreadcrumbItemType[] }) {
    return (
        <header className="border-sidebar-border/50 flex h-16 shrink-0 items-center justify-between gap-2 border-b px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-6">
            <div className="flex w-full items-center justify-between gap-2 md:w-fit md:justify-center">
                <span className="md:hidden">
                    <AppLogo />
                </span>

                <SidebarTrigger className="-ml-1" />
                <span className="hidden md:block">
                    <Breadcrumbs breadcrumbs={breadcrumbs} />
                </span>
            </div>
            <div className="hidden items-center gap-5 md:flex">
                <Button size="sm">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8333 1.66669L2.5 11.6667H10L9.16667 18.3334L17.5 8.33335H10L10.8333 1.66669Z"
                            stroke="white"
                            stroke-width="1.67"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    Upgrade now
                </Button>

                <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.4417 17.5C11.2952 17.7526 11.0849 17.9622 10.8319 18.108C10.5788 18.2537 10.292 18.3304 10 18.3304C9.70802 18.3304 9.42116 18.2537 9.16814 18.108C8.91513 17.9622 8.70484 17.7526 8.55833 17.5M15 6.66669C15 5.3406 14.4732 4.06883 13.5355 3.13115C12.5979 2.19347 11.3261 1.66669 10 1.66669C8.67392 1.66669 7.40215 2.19347 6.46447 3.13115C5.52678 4.06883 5 5.3406 5 6.66669C5 12.5 2.5 14.1667 2.5 14.1667H17.5C17.5 14.1667 15 12.5 15 6.66669Z"
                            stroke="#667085"
                            stroke-width="1.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </header>
    );
}

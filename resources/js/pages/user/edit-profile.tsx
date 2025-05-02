import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, type ProfileFormData } from '@/types';
import { PageProps } from '@inertiajs/core';
import { Head, useForm } from '@inertiajs/react';
import { Label } from '@radix-ui/react-dropdown-menu';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Edit Profile',
        href: '/profile/edit',
    },
];

interface EditProps extends PageProps {
    user: {
        profile?: {
            id: number;
            logo?: File | null;
            phone?: string;
            bio?: string;
            location?: string;
            facebook?: string;
            twitter?: string;
            instagram?: string;
            tiktok?: string;
            whatsapp?: string;
        };
    };
}

export default function Edit({ user }: EditProps) {
    const profile = user?.profile ?? {};

    const { data, setData, post, processing, errors } = useForm<ProfileFormData>({
        _method: 'PUT',
        logo: null,
        phone: profile.phone || '',
        bio: profile.bio || '',
        location: profile.location || '',
        facebook: profile.facebook || '',
        twitter: profile.twitter || '',
        instagram: profile.instagram || '',
        tiktok: profile.tiktok || '',
        whatsapp: profile.whatsapp || '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('profiles.update', profile.id), {
            forceFormData: true,
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Profile" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 rounded-xl border bg-white p-6 dark:bg-neutral-900">
                    <form onSubmit={submit} className="grid gap-4 md:grid-cols-2">
                        <div className="md:col-span-2">
                            <Label className="mb-2 block text-sm font-medium">Logo</Label>
                            {data.logo && (
                                <img
                                    src={typeof data.logo === 'string' ? `/storage/${data.logo}` : URL.createObjectURL(data.logo)}
                                    alt="Logo preview"
                                    className="h-32 w-auto rounded-md border object-contain p-2"
                                />
                            )}
                            <Input
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        setData('logo', file);
                                    }
                                }}
                                className="w-full rounded border p-2"
                            />
                            <InputError message={errors.logo} className="mt-1" />
                        </div>

                        {[
                            { name: 'phone', label: 'Phone' },
                            { name: 'location', label: 'Location' },
                            { name: 'facebook', label: 'Facebook' },
                            { name: 'twitter', label: 'Twitter' },
                            { name: 'instagram', label: 'Instagram' },
                            { name: 'tiktok', label: 'TikTok' },
                            { name: 'whatsapp', label: 'WhatsApp' },
                        ].map(({ name, label }) => (
                            <div key={name}>
                                <Label className="block text-sm font-medium">{label}</Label>
                                <Input
                                    name={name}
                                    value={data[name as keyof typeof data] as string}
                                    onChange={(e) => setData(name as keyof typeof data, e.target.value)}
                                    disabled={processing}
                                    className="w-full rounded border p-2"
                                />
                                <InputError message={errors[name as keyof typeof errors]} className="mt-1" />
                            </div>
                        ))}

                        <div className="md:col-span-2">
                            <Label className="block text-sm font-medium">Bio</Label>
                            <textarea
                                name="bio"
                                value={data.bio}
                                onChange={(e) => setData('bio', e.target.value)}
                                disabled={processing}
                                className="w-full rounded border p-2"
                                rows={4}
                            />
                            <InputError message={errors.bio} className="mt-1" />
                        </div>

                        <div className="md:col-span-2">
                            <Button type="submit" className="w-full" disabled={processing}>
                                {processing && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
                                Save Profile
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}

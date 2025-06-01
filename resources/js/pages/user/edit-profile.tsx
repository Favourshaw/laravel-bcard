import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Uploads from '@/components/ui/uploads';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, type ProfileFormData } from '@/types';
import { PageProps } from '@inertiajs/core';
import { Head, useForm } from '@inertiajs/react';
import { Label } from '@radix-ui/react-label';
import { GlobeIcon, LoaderCircle, MailCheck, MapPin, PhoneCall } from 'lucide-react';
import { FormEventHandler } from 'react';
import { FaBehance, FaDribbble, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaSnapchat, FaTiktok, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import makeAnimated from 'react-select/animated';
import CreatableSelect, { ActionMeta, MultiValue } from 'react-select/creatable';

interface SelectOption {
    label: string;
    value: string;
}

const animatedComponents = makeAnimated();

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
            avatar?: File | null;
            phone?: string;
            description?: string;
            bio?: string;
            location?: string;
            facebook?: string;
            twitter?: string;
            instagram?: string;
            tiktok?: string;
            whatsapp?: string;
            linkedin?: string;
            snapchat?: string;
            github?: string;
            others?: string;
            bname?: null | string;
            bmail?: string;
            behance?: string;
            dribble?: string;
            slogan?: string;
            qr?: string;
            skills?: string[];
        };
    };
}

const getStorageUrl = (path: string | undefined, defaultImage: string) => {
    if (!path) return defaultImage;
    const cleanedPath = path.replace(/^\/?storage\//, '');
    return `/storage/${cleanedPath}`;
};

export default function Edit({ user }: EditProps) {
    const profile = user?.profile ?? {};

    const { data, setData, post, processing, errors } = useForm<ProfileFormData>({
        _method: 'PUT',
        logo: null,
        avatar: null,
        phone: user?.profile?.phone || '',
        description: user?.profile?.description || '',
        bio: user?.profile?.bio || '',
        location: user?.profile?.location || '',
        facebook: user?.profile?.facebook || '',
        twitter: user?.profile?.twitter || '',
        instagram: user?.profile?.instagram || '',
        tiktok: user?.profile?.tiktok || '',
        whatsapp: user?.profile?.whatsapp || '',
        linkedin: user?.profile?.linkedin || '',
        snapchat: user?.profile?.snapchat || '',
        github: user?.profile?.github || '',
        others: user?.profile?.others || '',
        bname: user?.profile?.bname || '',
        bmail: user?.profile?.bmail || '',
        behance: user?.profile?.behance || '',
        dribble: user?.profile?.dribble || '',
        slogan: user?.profile?.slogan || '',
        skills: user?.profile?.skills || [],
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('profiles.update', profile.id), {
            forceFormData: true,
        });
    };

    const qrUrl = getStorageUrl(profile.qr, '/qrcodes/5.png');
    const avatarUrl = getStorageUrl(profile.avatar, '/storage/avatars/avatar.png');
    const logoUrl = getStorageUrl(profile.logo, '/storage/logos/logos.png');

    const handleSkillsChange = (newValue: MultiValue<SelectOption>, actionMeta: ActionMeta<SelectOption>) => {
        setData(
            'skills',
            newValue.map((item) => item.value),
        );
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Profile" />
            <div className="flex h-full max-w-5xl flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 rounded-xl border bg-white p-6 dark:bg-neutral-900">
                    <form onSubmit={submit} className="space-y-6">
                        <div className="md:col-span-2">
                            <div className="flex items-center justify-between">
                                <div className="mb-4">
                                    <Label className="text-muted mb-1.5 block text-sm font-medium">Logo</Label>
                                    <Uploads onChange={(file) => setData('logo', file)} />
                                </div>
                                <div className="text-center">
                                    <img src={qrUrl} alt="QR Code" className="h-24 w-24" />
                                </div>
                            </div>

                            {data.logo && (
                                <img
                                    src={typeof data.logo === 'string' ? `/storage/${data.logo}` : URL.createObjectURL(data.logo)}
                                    alt="Logo preview"
                                    className="h-32 w-auto rounded-md border object-contain p-2"
                                />
                            )}

                            <img src={logoUrl} alt="Logo preview" className="h-32 w-auto rounded-md border object-contain p-2" />
                            <InputError message={errors.logo} className="mt-1" />
                        </div>

                        {/* Avatar Upload */}
                        <div className="md:col-span-2">
                            <div className="mb-4">
                                <Label className="text-muted mb-1.5 block text-sm font-medium">Avatar</Label>
                                <Uploads onChange={(file) => setData('avatar', file)} />
                            </div>
                            {data.avatar && (
                                <img
                                    src={typeof data.avatar === 'string' ? `/storage/${data.avatar}` : URL.createObjectURL(data.avatar)}
                                    alt="Avatar preview"
                                    className="h-32 w-auto rounded-md border object-contain p-2"
                                />
                            )}
                            <img src={avatarUrl} alt="Avatar" className="h-32 w-32 rounded-md border object-contain p-2" />
                            <InputError message={errors.avatar} className="mt-1" />
                        </div>

                        {/* Business Info */}
                        <div className="w-full space-y-6 lg:max-w-[550px]">
                            <div>
                                <Label className="text-muted mb-1.5 block text-sm font-medium">Business Name</Label>
                                <Input
                                    name="bname"
                                    value={data.bname}
                                    onChange={(e) => setData('bname', e.target.value)}
                                    disabled={processing}
                                    className="w-full rounded border p-3 text-base text-black shadow-md"
                                />
                                <InputError message={errors.bname} className="mt-1" />
                            </div>
                            <div>
                                <Label className="text-muted mb-1.5 block text-sm font-medium">Slogan</Label>
                                <Input
                                    name="slogan"
                                    value={data.slogan}
                                    onChange={(e) => setData('slogan', e.target.value)}
                                    disabled={processing}
                                    className="w-full rounded border p-3 text-base text-black shadow-md"
                                />
                                <InputError message={errors.slogan} className="mt-1" />
                            </div>
                        </div>

                        {/* Bio & Description */}
                        <div className="md:col-span-2">
                            <Label className="text-muted mb-1.5 block text-sm font-medium">Bio</Label>
                            <textarea
                                name="bio"
                                value={data.bio}
                                onChange={(e) => setData('bio', e.target.value)}
                                disabled={processing}
                                className="w-full rounded border p-3 text-base text-black shadow-md"
                                rows={4}
                            />
                            <InputError message={errors.bio} className="mt-1" />
                        </div>
                        <div className="md:col-span-2">
                            <Label className="text-muted mb-1.5 block text-sm font-medium">Description</Label>
                            <textarea
                                name="description"
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                disabled={processing}
                                className="w-full rounded border p-3 text-base text-black shadow-md"
                                rows={4}
                            />
                            <InputError message={errors.description} className="mt-1" />
                        </div>

                        {/* Skills Input */}
                        <div className="md:col-span-2">
                            <Label className="text-muted mb-1.5 block text-sm font-medium">Skills</Label>
                            <CreatableSelect<SelectOption, true>
                                isMulti
                                components={animatedComponents}
                                onChange={handleSkillsChange}
                                value={(data.skills || []).map((skill) => ({ label: skill, value: skill }))}
                                className="react-select-container"
                                classNamePrefix="react-select"
                                placeholder="Type and press enter..."
                                isDisabled={processing}
                            />
                            <InputError message={errors.skills as string} className="mt-1" />
                        </div>

                        {/* Social Media */}
                        <div className="grid gap-6 lg:grid-cols-2">
                            {[
                                { name: 'phone', label: 'Phone', icon: <PhoneCall size={22} /> },
                                { name: 'location', label: 'Location', icon: <MapPin size={22} /> },
                                { name: 'facebook', label: 'Facebook', icon: <FaFacebook size={22} /> },
                                { name: 'twitter', label: 'Twitter', icon: <FaTwitter size={22} /> },
                                { name: 'instagram', label: 'Instagram', icon: <FaInstagram size={22} /> },
                                { name: 'tiktok', label: 'TikTok', icon: <FaTiktok size={22} /> },
                                { name: 'whatsapp', label: 'WhatsApp', icon: <FaWhatsapp size={22} /> },
                                { name: 'dribble', label: 'Dribble', icon: <FaDribbble size={22} /> },
                                { name: 'behance', label: 'Behance', icon: <FaBehance size={22} /> },
                                { name: 'bmail', label: 'Business Mail', icon: <MailCheck size={22} /> },
                                { name: 'others', label: 'Others', icon: <GlobeIcon size={22} /> },
                                { name: 'github', label: 'Github', icon: <FaGithub size={22} /> },
                                { name: 'snapchat', label: 'Snapchat', icon: <FaSnapchat size={22} /> },
                                { name: 'linkedin', label: 'LinkedIn', icon: <FaLinkedin size={22} /> },
                            ].map(({ name, label, icon }) => (
                                <div key={name} className="relative">
                                    <Label className="text-muted mb-1.5 block text-sm font-medium">{label}</Label>
                                    <span className="absolute top-13 left-3 -translate-y-1/2 transform text-black">{icon}</span>
                                    <Input
                                        name={name}
                                        value={data[name as keyof typeof data] as string}
                                        onChange={(e) => setData(name as keyof typeof data, e.target.value)}
                                        disabled={processing}
                                        className="w-full rounded border p-3 pl-10 text-base text-black shadow-md"
                                    />
                                    <InputError message={errors[name as keyof typeof errors]} className="mt-1" />
                                </div>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="mt-18 flex flex-col items-center justify-center gap-3 md:flex-row">
                            <Button
                                variant="secondary"
                                className="w-[242px] md:w-fit"
                                type="button"
                                onClick={() => window.history.back()}
                                disabled={processing}
                            >
                                {processing && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
                                Back
                            </Button>
                            <Button type="submit" className="w-[242px] md:w-fit" disabled={processing}>
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

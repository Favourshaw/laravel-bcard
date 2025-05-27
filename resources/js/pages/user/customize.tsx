import { useForm } from '@inertiajs/react';
import React from 'react';

const themes = ['retro', 'minimal', 'modern'];
const defaultColors = {
    primary: '#1d4ed8',
    secondary: '#9333ea',
    text: '#000000',
};

export default function Customize({ user }) {
    const { data, setData, post, processing } = useForm({
        theme: user.theme || 'Classic',
        colors: user.colors || defaultColors,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('customize.update'));
    };

    return (
        <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-4 rounded bg-white p-6 shadow">
            <h2 className="mb-2 text-xl font-bold">Customize Your Page</h2>

            <label className="block">
                Theme:
                <select value={data.theme} onChange={(e) => setData('theme', e.target.value)} className="mt-1 block w-full rounded border">
                    {themes.map((theme) => (
                        <option key={theme} value={theme}>
                            {theme}
                        </option>
                    ))}
                </select>
            </label>

            <div className="space-y-2">
                <label>
                    Primary Color:
                    <input
                        type="color"
                        value={data.colors.primary}
                        onChange={(e) => setData('colors', { ...data.colors, primary: e.target.value })}
                    />
                </label>
                <label>
                    Secondary Color:
                    <input
                        type="color"
                        value={data.colors.secondary}
                        onChange={(e) => setData('colors', { ...data.colors, secondary: e.target.value })}
                    />
                </label>
                <label>
                    Text Color:
                    <input type="color" value={data.colors.text} onChange={(e) => setData('colors', { ...data.colors, text: e.target.value })} />
                </label>
            </div>

            <button type="submit" disabled={processing} className="rounded bg-blue-600 px-4 py-2 text-white">
                Save
            </button>
        </form>
    );
}

// contexts/ThemeContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { themePresets } from '../lib/themePresets';

type Colors = { primary: string; secondary: string; text: string };
type ThemeContextType = {
    template: string;
    palette: string;
    colors: Colors;
    setTheme: (template: string, palette: string) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [template, setTemplate] = useState('modern');
    const [palette, setPalette] = useState('blue');

    const colors = themePresets[template][palette];

    const setTheme = (template: string, palette: string) => {
        setTemplate(template);
        setPalette(palette);
    };

    return <ThemeContext.Provider value={{ template, palette, colors, setTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('ThemeContext missing');
    return ctx;
};

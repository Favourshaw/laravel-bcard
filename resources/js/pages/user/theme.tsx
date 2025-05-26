import ThemePicker from '@/components/theme-picker';
import MinimalTheme from '@/components/theme/minimalTheme';
import ModernTheme from '@/components/theme/modernTheme';
import RetroTheme from '@/components/theme/retroTheme';
import { useTheme } from '@/contexts/theme-context';

const ThemePage = () => {
    const { template, colors } = useTheme();

    const renderTheme = () => {
        switch (template) {
            case 'modern':
                return <ModernTheme colors={colors} />;
            case 'minimal':
                return <MinimalTheme colors={colors} />;
            case 'retro':
                return <RetroTheme colors={colors} />;
            default:
                return <ModernTheme colors={colors} />;
        }
    };

    return (
        <div className="space-y-6 p-8">
            <h1 className="text-2xl font-bold">Your Theme Preview</h1>
            <ThemePicker />
            {renderTheme()}
        </div>
    );
};

export default ThemePage;

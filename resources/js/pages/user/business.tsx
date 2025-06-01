import MinimalTheme from '@/components/theme/minimalTheme';
import ModernTheme from '@/components/theme/modernTheme';
import RetroTheme from '@/components/theme/retroTheme';

const themeComponents = {
    minimal: MinimalTheme,
    modern: ModernTheme,
    retro: RetroTheme,
};

export default function Business({ profileData, isOwner }) {
    const themeKey = (profileData.user.theme || 'minimal').toLowerCase();
    console.log('themeKey:', themeKey);
    const SelectedTheme = themeComponents[themeKey] || MinimalTheme;

    return <SelectedTheme profileData={profileData} isOwner={isOwner} />;
}

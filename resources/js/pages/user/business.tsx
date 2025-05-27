import MinimalTheme from '@/components/theme/minimalTheme';
import ModernTheme from '@/components/theme/modernTheme';
import ClassicTheme from '@/components/theme/retroTheme';

const themeComponents = {
    minimal: MinimalTheme,
    modern: ModernTheme,
    classic: ClassicTheme,
};

export default function Business({ profileData, isOwner }) {
    const themeKey = (profileData.user.theme || 'minimal').toLowerCase();
    console.log('themeKey:', themeKey); // Debug line
    const SelectedTheme = themeComponents[themeKey] || MinimalTheme;

    return <SelectedTheme profileData={profileData} isOwner={isOwner} />;
}

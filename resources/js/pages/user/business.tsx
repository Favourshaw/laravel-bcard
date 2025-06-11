import Fitness from '@/components/theme/fitness';
import Food from '@/components/theme/food';
import MinimalTheme from '@/components/theme/minimalTheme';
import ModernTheme from '@/components/theme/modernTheme';
import Personal2 from '@/components/theme/personal-dock';
import Personal1 from '@/components/theme/personal-tab';
import RetroTheme from '@/components/theme/retroTheme';

const themeComponents = {
    minimal: MinimalTheme,
    modern: ModernTheme,
    retro: RetroTheme,
    fitness: Fitness,
    personal1: Personal1,
    personal2: Personal2,
    food: Food,
};

export default function Business({ profileData, isOwner }) {
    const themeKey = (profileData.user.theme || 'minimal').toLowerCase();
    console.log('themeKey:', themeKey);
    const SelectedTheme = themeComponents[themeKey] || MinimalTheme;

    return <SelectedTheme profileData={profileData} isOwner={isOwner} />;
}

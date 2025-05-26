import { useTheme } from '@/contexts/theme-context';
import { themePresets } from '@/lib/themePresets';

const ThemePicker = () => {
    const { template, palette, setTheme } = useTheme();

    return (
        <div className="space-y-4">
            <div>
                <h2 className="font-bold">Select Theme Template</h2>
                {Object.keys(themePresets).map((tpl) => (
                    <button
                        key={tpl}
                        className={`mr-2 rounded border px-3 py-1 ${template === tpl ? 'border-black' : 'border-gray-300'}`}
                        onClick={() => setTheme(tpl, palette)}
                    >
                        {tpl}
                    </button>
                ))}
            </div>

            <div>
                <h2 className="font-bold">Select Color Palette</h2>
                {Object.keys(themePresets[template]).map((pal) => (
                    <button
                        key={pal}
                        className={`mr-2 rounded border px-3 py-1 ${palette === pal ? 'border-black' : 'border-gray-300'}`}
                        onClick={() => setTheme(template, pal)}
                    >
                        {pal}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ThemePicker;

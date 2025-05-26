// components/themes/RetroTheme.tsx
type Props = { colors: { primary: string; secondary: string; text: string } };

export default function RetroTheme({ colors }: Props) {
    return (
        <div
            className="p-6"
            style={{
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                color: colors.text,
            }}
        >
            <h1 className="mb-2 text-xl font-bold">Retro Theme</h1>
            <p>Vintage look with bold color vibes.</p>
        </div>
    );
}

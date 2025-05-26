type Props = { colors: { primary: string; secondary: string; text: string } };

export default function MinimalTheme({ colors }: Props) {
    return (
        <div className="rounded border p-6" style={{ backgroundColor: colors.primary, color: colors.text }}>
            <h1 className="mb-2 text-xl font-semibold">Minimal Theme</h1>
            <p style={{ color: colors.secondary }}>Lightweight and focused.</p>
        </div>
    );
}

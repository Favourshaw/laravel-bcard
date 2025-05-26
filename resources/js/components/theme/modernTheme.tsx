type Props = { colors: { primary: string; secondary: string; text: string } };

export default function ModernTheme({ colors }: Props) {
    return (
        <div className="rounded-lg p-6" style={{ backgroundColor: colors.primary, color: colors.text }}>
            <h1 className="mb-2 text-2xl font-bold">Modern Theme</h1>
            <p style={{ color: colors.secondary }}>Clean, structured UI.</p>
        </div>
    );
}

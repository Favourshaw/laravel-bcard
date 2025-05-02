interface CardProps {
    isBack: boolean;
    bgColor: string;
    textColor: string;
    bgGradient?: string;
    bgType?: 'solid' | 'gradient';
    user?: {
        name: string;
        profile?: {
            slogan?: string;
        };
    };
}

export function Card1({ isBack, bgColor, textColor, bgGradient, bgType = 'solid', user }: CardProps) {
    const backgroundStyle = bgType === 'gradient' ? { background: bgGradient } : { backgroundColor: bgColor };

    const profile = user?.profile;

    return (
        <div
            className="flex h-full w-full flex-col justify-between rounded-lg p-4 shadow-lg"
            style={{
                ...backgroundStyle,
                color: textColor,
            }}
        >
            {isBack ? (
                <div className="flex h-full flex-col items-center justify-center">
                    <h3 className="mb-2 text-xl font-bold">Contact Information</h3>
                    <p className="text-sm">email@example.com</p>
                    <p className="text-sm">(123) 456-7890</p>
                    <p className="text-sm">www.example.com</p>
                </div>
            ) : (
                <div className="flex h-full flex-col justify-between">
                    <div className="text-right">
                        <p className="text-xs">Business Card</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">{profile?.slogan && <p>📞 {profile.slogan}</p>}</h2>
                        <p className="text-sm">Software Developer</p>
                    </div>
                    <div className="flex justify-end">
                        <p className="text-xs">Company Name</p>
                    </div>
                </div>
            )}
        </div>
    );
}

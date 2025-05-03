import { FaGlobe, FaRegEnvelope } from 'react-icons/fa';

interface CardProps {
    isBack: boolean;
    bgColor: string;
    textColor: string;
    bgGradient?: string;
    bgType?: 'solid' | 'gradient';

    user?: {
        name: string;
        username: string;
        email: string;
        profile?: {
            slogan?: string;
            qr?: string;
        };
    };
}

const getStorageUrl = (path: string | undefined, defaultImage: string) => {
    if (!path) return defaultImage;
    const cleanedPath = path.replace(/^\/?storage\//, '');
    return `/storage/${cleanedPath}`;
};

export function Card1({ isBack, bgColor, textColor, bgGradient, bgType = 'solid', user }: CardProps) {
    const backgroundStyle = bgType === 'gradient' ? { background: bgGradient } : { backgroundColor: bgColor };
    const profile = user?.profile;
    const profileUrl = `${window.location.origin}/${user?.username}`;
    const qrUrl = getStorageUrl(profile?.qr, '/qrcodes/5.png');
    const headerImage = "url('/storage/cards/card2.png')";
    return (
        <div
            className="flex h-full w-full flex-col justify-between rounded-lg shadow-lg"
            style={{
                ...backgroundStyle,
                color: textColor,
            }}
        >
            {isBack ? (
                <div className="m-4 flex h-full flex-col justify-between">
                    <div className="m-[-16px] mb-0 h-11 rounded-t-lg bg-cover bg-bottom bg-no-repeat" style={{ backgroundImage: headerImage }}></div>
                    <div className="mb-2 flex flex-row justify-between">
                        <div className="flex flex-col justify-end gap-2 text-left">
                            <h2 className="card-title">{data.username}</h2>
                            <div className="card-text flex flex-row gap-1 text-left">
                                <FaRegEnvelope /> <span>{user.email}</span>
                            </div>
                            <div className="card-text flex flex-row gap-1 text-left">
                                <FaGlobe /> <span>{profileUrl}</span>
                            </div>
                        </div>
                        <div className="">
                            <img
                                src={qrUrl}
                                alt={`${user.name}'s logo`}
                                className="h-20 w-20 object-cover"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = '/storage/defaults/default.png';
                                }}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex h-full w-full flex-col justify-between rounded-lg shadow-lg" style={{ ...backgroundStyle, color: textColor }}>
                    <div className="m-4 flex h-full flex-col justify-between">
                        <div
                            className="m-[-16px] mb-0 h-9 rounded-t-lg bg-cover bg-bottom bg-no-repeat"
                            style={{ backgroundImage: headerImage }}
                        ></div>
                        <div className="mb-3 text-left">
                            <div className="mb-3 text-2xl font-extrabold">
                                <span className="text-gray-900">show</span>
                                <span className="text-green-500">caxe</span>
                            </div>
                            <div className="">
                                <h2 className="card-title">{user?.username || 'Username'}</h2>
                                <p className="card-text max-w-[170px]">{profile?.slogan || 'Your slogan here'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export function Card2({ isBack, bgColor, textColor, bgGradient, bgType = 'solid', user }: CardProps) {
    const backgroundStyle = bgType === 'gradient' ? { background: bgGradient } : { backgroundColor: bgColor };
    const profile = user?.profile;
    const profileUrl = `${window.location.origin}/${user?.username}`;
    const qrUrl = getStorageUrl(profile?.qr, '/qrcodes/5.png');
    const footerImage = "url('/storage/cards/card1.png')";
    return (
        <div
            className="flex h-full w-full flex-col justify-between rounded-lg shadow-lg"
            style={{
                ...backgroundStyle,
                color: textColor,
            }}
        >
            {isBack ? (
                <div className="m-4 flex h-full flex-col justify-between">
                    <div className="flex flex-row justify-between">
                        <div className="mt-3">
                            <img
                                src={qrUrl}
                                alt={`${user.name}'s logo`}
                                className="h-20 w-20 object-cover"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = '/storage/defaults/default.png';
                                }}
                            />
                        </div>
                        <div className="flex flex-col justify-end gap-2 text-left">
                            <h2 className="card-title">{user.username}</h2>
                            <div className="card-text flex flex-row gap-1 text-left">
                                <FaRegEnvelope /> <span>{user.email}</span>
                            </div>
                            <div className="card-text flex flex-row gap-1 text-left">
                                <FaGlobe /> <span>{profileUrl}</span>
                            </div>
                        </div>
                    </div>

                    <div
                        className="m-[-16px] mt-0 h-9 rounded-b-lg bg-cover bg-bottom bg-no-repeat"
                        style={{ backgroundImage: "url('/storage/cards/card1.jpg')" }}
                    ></div>
                </div>
            ) : (
                <div className="flex h-full w-full flex-col justify-between rounded-lg shadow-lg" style={{ ...backgroundStyle, color: textColor }}>
                    <div className="m-4 flex h-full flex-col justify-between">
                        <div className="text-left">
                            <div className="text-2xl font-extrabold text-blue-900">
                                <span className="text-gray-900">show</span>
                                <span className="text-green-500">caxe</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-end">
                            <h2 className="card-title">{user?.username || 'Username'}</h2>
                            <p className="card-text max-w-[170px] text-center">{profile?.slogan || 'Your slogan here'}</p>
                        </div>

                        <div
                            className="m-[-16px] mt-0 h-8 rounded-b-lg bg-cover bg-bottom bg-no-repeat"
                            style={{ backgroundImage: footerImage }}
                        ></div>
                    </div>
                </div>
            )}
        </div>
    );
}

export function Card3({ isBack, bgColor, textColor, bgGradient, bgType = 'solid', user }: CardProps) {
    const backgroundStyle = bgType === 'gradient' ? { background: bgGradient } : { backgroundColor: bgColor };
    const profile = user?.profile;
    const profileUrl = `${window.location.origin}/${user?.username}`;
    const qrUrl = getStorageUrl(profile?.qr, '/qrcodes/5.png');
    const footerImage = "url('/storage/cards/card3.png')";
    const cardImage = "url('/storage/cards/card3Design.png')";
    return (
        <div
            className="flex h-full w-full flex-col justify-between rounded-lg shadow-lg"
            style={{
                ...backgroundStyle,
                color: textColor,
            }}
        >
            {isBack ? (
                <div className="m-4 flex h-full flex-col justify-between">
                    <div className="mt-3">
                        <h2 className="card-title">{user.username}</h2>
                    </div>

                    <div className="flex flex-row items-end justify-between">
                        <div className="h-20 w-20">
                            <div className="m-[-16px] mt-4 h-full w-full rounded-b-lg bg-cover" style={{ backgroundImage: cardImage }}></div>
                        </div>
                        <div className="flex flex-col items-end gap-2 text-right">
                            <img
                                src={qrUrl}
                                alt={`${user.name}'s logo`}
                                className="h-20 w-20 object-cover"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = '/storage/defaults/default.png';
                                }}
                            />

                            <div className="card-text flex flex-row gap-1 text-right">
                                <FaRegEnvelope /> <span>{user.email}</span>
                            </div>
                            <div className="card-text flex flex-row gap-1 text-right">
                                <FaGlobe /> <span>{profileUrl}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex h-full w-full flex-col justify-between rounded-lg shadow-lg" style={{ ...backgroundStyle, color: textColor }}>
                    <div className="m-4 flex h-full flex-col justify-between">
                        <div className="text-left">
                            <div className="text-2xl font-extrabold text-blue-900">
                                <span className="text-gray-900">show</span>
                                <span className="text-green-500">caxe</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-end">
                            <h2 className="card-title">{user?.username || 'Username'}</h2>
                            <p className="card-text max-w-[170px] text-center">{profile?.slogan || 'Your slogan here'}</p>
                        </div>

                        <div
                            className="m-[-16px] mt-0 h-8 rounded-b-lg bg-cover bg-bottom bg-no-repeat"
                            style={{ backgroundImage: footerImage }}
                        ></div>
                    </div>
                </div>
            )}
        </div>
    );
}
export function Card4({ isBack, bgColor, textColor, bgGradient, bgType = 'solid', user }: CardProps) {
    const backgroundStyle = bgType === 'gradient' ? { background: bgGradient } : { backgroundColor: bgColor };
    const profile = user?.profile;
    const profileUrl = `${window.location.origin}/${user?.username}`;
    const qrUrl = getStorageUrl(profile?.qr, '/qrcodes/5.png');
    const cardImage = "url('/storage/cards/card4Design.png')";
    const cardBg = "url('/storage/cards/test.svg')";
    return (
        <div
            className="flex h-full w-full flex-col justify-between rounded-lg"
            style={{
                ...backgroundStyle,
                color: textColor,
            }}
        >
            {isBack ? (
                <div className="m-4 flex h-full flex-col justify-between">
                    <div className="mt-3">
                        <h2 className="card-title text-right">{user.username}</h2>
                    </div>

                    <div className="flex flex-row items-start justify-between">
                        <div className="flex flex-col items-start gap-2">
                            <img
                                src={qrUrl}
                                alt={`${user.name}'s logo`}
                                className="h-20 w-20 object-cover"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = '/storage/defaults/default.png';
                                }}
                            />

                            <div className="card-text flex flex-row gap-1 text-left">
                                <FaRegEnvelope /> <span>{user.email}</span>
                            </div>
                            <div className="card-text flex flex-row gap-1 text-left">
                                <FaGlobe /> <span>{profileUrl}</span>
                            </div>
                        </div>
                        <div className="h-20 w-20">
                            <div className="m-[16px] mt-15 h-full w-full rounded-b-lg bg-cover" style={{ backgroundImage: cardImage }}></div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="h-full w-full rounded-lg" style={{ ...backgroundStyle, color: textColor }}>
                    <div
                        className="flex h-full min-h-full w-full flex-col justify-center gap-5 rounded-lg bg-[length:120%_120%] bg-center bg-no-repeat"
                        style={{ backgroundImage: cardBg }}
                    >
                        <div className="mx-auto">
                            <div className="text-2xl font-extrabold text-blue-900">
                                <span className="text-gray-900">show</span>
                                <span className="text-green-500">caxe</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center gap-2">
                            <h2 className="card-title text-white">{user?.username || 'Username'}</h2>
                            <p className="card-text max-w-[170px] text-center text-white">{profile?.slogan || 'Your slogan here'}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

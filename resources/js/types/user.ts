export interface User {
    id: string;
    name: string;
    username?: string;
    theme?: string;
    colors?: {
        primary: string;
        secondary: string;
        text: string;
    };
    created_at: string;
}

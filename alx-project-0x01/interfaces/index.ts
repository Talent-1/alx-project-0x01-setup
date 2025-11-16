export interface ButtonProps {
    title: string;
    styles: string;
    onClick?: () => void;
    size?: string;
}

export interface PostCardProps {
    title: string;
    body: string;
    author: string;
    userId: number;
}
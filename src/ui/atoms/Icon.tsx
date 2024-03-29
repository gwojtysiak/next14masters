
type IconProps = {
    src: string,
    alt: string,
    onClick?: () => void,
}
export const Icon = ({src, alt}: IconProps) => {
    return (
        <img src={src} width={20} alt={alt} className=":hover cursor-pointer" />
    );
}
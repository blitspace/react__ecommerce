import { ReactNode } from "react";


interface ButtonPrimaryProps {
    element?: 'a' | 'button';
    buttonType?: 'primary' | 'secondary';
    className?: string;
    onClick?: () => void;
    children?: string | ReactNode;
    rounded?: boolean;
    display?: 'inline-block' | 'block' | 'flex';
    border?: boolean,
    href?: string,
}

function ButtonPrimary({
    className,
    onClick,
    children,
    rounded = true,
    display = 'block',
    border = false,
    buttonType = 'primary',
    element = 'button',
    href='#'
}: ButtonPrimaryProps) {
    const primary   = 'text-white bg-teal-600 hover:bg-teal-700';
    const secondary = 'text-teal-600 bg-gray-100 hover:text-teal-600/75';
    const _className =  `
        ${display}
        ${rounded ? 'rounded-md' : ''}
        ${buttonType === 'primary' ? primary : secondary}
        transition
        px-5 py-2.5
        text-sm font-medium
        ${border ? 'border border-teal-600' : ''}
        align-bottom
        ${className}
    `;

    if (element === 'a') {
        return (
            <a
                href={href}
                className={_className}
                onClick={onClick}
                type="button"
            >{ children }</a>
        );
    } else if (element === 'button') {
        return (
            <button
                className={_className}
                onClick={onClick}
                type="button"
            >{ children }</button>
        );
    } else {
        return null;
    }
}

export default ButtonPrimary;

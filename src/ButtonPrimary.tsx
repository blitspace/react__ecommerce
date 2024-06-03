import { ReactNode } from "react";

interface ButtonPrimaryProps {
    buttonType?: 'primary' | 'secondary';
    className?: string;
    onClick?: () => void;
    children?: string | ReactNode;
    rounded?: boolean;
    display?: 'inline-block' | 'block' | 'flex';
    border?: boolean,
}

function ButtonPrimary({ className, onClick, children, rounded = true, display = 'block', border = false, buttonType = 'primary' }: ButtonPrimaryProps) {
    let primary   = 'text-white bg-teal-600 hover:bg-teal-700';
    let secondary = 'text-teal-600 bg-gray-100 hover:text-teal-600/75';
    return (
        <button
            className={`
                ${display}
                ${rounded ? 'rounded-md' : ''}
                ${buttonType === 'primary' ? primary : secondary}
                transition
                px-5 py-2.5
                text-sm font-medium
                ${border ? 'border border-teal-600' : ''}
                align-bottom
                ${className}
            `}
            onClick={onClick}
            type="button"
        >{ children }</button>
    );
}

export default ButtonPrimary;

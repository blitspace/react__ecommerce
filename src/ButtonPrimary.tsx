import { ReactNode } from "react";

interface ButtonPrimaryProps {
    className?: string;
    onClick?: () => void;
    children?: string | ReactNode;
    rounded?: boolean;
    display?: 'inline-block' | 'block' | 'flex';
    border?: boolean,
}

function ButtonPrimary({ className, onClick, children, rounded = true, display = 'block', border = false }: ButtonPrimaryProps) {
    return (
        <button
            className={`
                ${display}
                ${rounded ? 'rounded-md' : ''}
                bg-teal-600 hover:bg-teal-700 transition
                px-5 py-2.5
                text-sm font-medium text-white
                ${border ? 'border border-teal-600' : ''}
                align-bottom
                ${className}`}
            onClick={onClick}
            type="button"
        >{ children }</button>
    );
}

export default ButtonPrimary;

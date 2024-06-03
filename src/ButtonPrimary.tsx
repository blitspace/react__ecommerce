import { ReactNode } from "react";

interface ButtonPrimaryProps {
    className?: string;
    onClick?: () => void;
    children?: string | ReactNode;
}

function ButtonPrimary({ className, onClick, children }: ButtonPrimaryProps) {
    return (
        <button
            className={`border p-2 ${className}`}
            onClick={onClick}
            type="button"
        >{ children }</button>
    );
}

export default ButtonPrimary;

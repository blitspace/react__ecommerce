interface ButtonPrimaryProps {
    label: string;
    onClick?: () => void;
}

function ButtonPrimary({ label, onClick }: ButtonPrimaryProps) {
    return (
        <button
            className="border p-2"
            onClick={onClick}
        >{label}</button>
    );
}

export default ButtonPrimary;

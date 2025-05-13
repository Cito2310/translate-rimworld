interface props {
    label: string;
    onClick: () => void;
    disabled?: boolean;
}

export const DropdownMenuBtn = ({ label, onClick, disabled }: props) => (
    <button disabled={disabled} onClick={onClick} className="
        px-8 py-1 text-[#ddd] bg-inherit hover:bg-[#0002] transition-base cursor-pointer
    ">{label}</button>
)
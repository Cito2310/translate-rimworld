interface props {
    label: string;
    onClick: () => void;
}

export const DropdownMenuBtn = ({ label, onClick }: props) => (
    <div onClick={onClick} className="
        px-8 py-1 text-[#ddd] bg-inherit hover:bg-[#0002] transition-base cursor-pointer
    ">{label}</div>
)
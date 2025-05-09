interface props {
    onClick: () => void
    label: string
}

export const DropdownButton = ({ label, onClick }: props) => <p 
    onClick={onClick}
    className="
    bg-inherit text-[#ddd] w-[100px] h-[32px]
    relative items-center justify-center flex
    transition-base hover:brightness-150 cursor-default">
    {label}
</p>
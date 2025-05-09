import { useState } from "react"
import { DropdownButton } from "./DropdownButton";
import { DropdownMenuBtn } from "./DropdownMenuBtn";

interface props {
    label: string;
    menu: {label: string; func: () => void}[]

}

export const DropdownMenu = ({ label, menu }: props) => {
    const [isOpen, setIsOpen] = useState(false);
    const onToggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="bg-inherit">
            <DropdownButton label={label} onClick={onToggleDropdown}/>
            {isOpen || <div className="absolute bg-[#363636] rounded shadow py-2">
                {
                    menu.map(({ func, label }, index) => <DropdownMenuBtn label={label} onClick={func} key={index} /> )
                }
            </div>}
        </div>
    )
}
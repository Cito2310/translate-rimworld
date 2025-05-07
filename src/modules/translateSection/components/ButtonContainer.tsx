import { Icon } from "./Icon";

interface props {
    onClick: () => void;
    type: "complete" | "regular"
    icon: "xcross" | "check" | "translate" | "r"
}

export const ButtonContainer = ({ onClick, type, icon }: props) => 
    <button onClick={onClick} className={`
    bg-[#363636] w-10 text-[.9em] flex items-center justify-center rounded
    ${ type === "complete" ? "bg-[#275c27]" : null }
    `}>
        <Icon icon={icon} />
    </button>

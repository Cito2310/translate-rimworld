import { UseFormRegisterReturn } from "react-hook-form"

interface props {
    register: UseFormRegisterReturn<"nameProject">;
    placeholder: string;
    className?: string;
    label: string;
}

export const InputBasic = ({register, placeholder, className, label}: props) => {
    return (
        <div className="flex items-center gap-3 text-[#ddd]">
            <label>{label}</label>
            <input 
                {...register}
                placeholder={placeholder}
                className={`
                    ${className}
                    outline-none
                    bg-[#303030] text-[#ddd]
                    p-3 py-1 rounded
                    placeholder:text-[#777]
                `}
            />
        </div>
    )
}
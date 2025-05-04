import { UseFormRegister } from "react-hook-form";
import { Keyed } from "../../../core/types/keyed";
import { DefInjected } from "../../../core/types/defInjected";

interface props {
    register: UseFormRegister<{values: (Keyed | DefInjected)[]}>
    data: Keyed
    index: number
}

export const ItemListKeyed = ({ data, index, register }: props) => {
    const { isFirstItem, name, original, text } = data;

    return (
        <li className="text-[#ddd] list-none">
            {isFirstItem ? <h1>Keyed</h1> : null}
            <label>{name}</label>
            <input {...register(`values.${index}.text`)}></input>
        </li>
    )
}
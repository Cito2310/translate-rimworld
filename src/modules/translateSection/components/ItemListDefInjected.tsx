import { UseFormRegister } from "react-hook-form";
import { Keyed } from "../../../core/types/keyed";
import { DefInjected } from "../../../core/types/defInjected";

interface props {
    register: UseFormRegister<{values: (Keyed | DefInjected)[]}>
    data: DefInjected
    index: number
}

export const ItemListDefInjected = ({ data, index, register }: props) => {
    const { base, isFirstBase, isFirstItem, isFirstType, name, original, text, type } = data;

    return (
        <li className="text-[#ddd] list-none">

            {isFirstItem ? <h1 className="text-[1.8em] font-semibold">DefInjected</h1> : null}

            {isFirstType ? <h2>{type}</h2> : null}

            {isFirstBase ? <h4>{base}</h4> : null}

            <label>{name}</label>

            <input {...register(`values.${index}.text`)}></input>

        </li>
    )
}
import { Control, UseFormRegister } from "react-hook-form";
import { Keyed } from "../../../core/types/keyed";
import { DefInjected } from "../../../core/types/defInjected";
import { TitleTranslate } from "./TitleTranslate";
import { ContainerKeyed } from "./ContainerKeyed";


interface props {
    register: UseFormRegister<{values: (Keyed | DefInjected)[]}>
    data: Keyed
    index: number
    control: Control<any>
}

export const ItemListKeyed = ({ data, index, register, control }: props) => {
    const { isFirstItem, name, original, text,  } = data;

    return (
        <li className="text-[#ddd] list-none mx-5">
            {/* PARTE PARA AÑADIR EL TITULO DEFINJECTED */}
            {isFirstItem ? <TitleTranslate label="Keyed" type="title" /> : null}

            {/* PARTE DONDE ESTAN CADA UNO DE LOS TEXTOS A TRADUCIR */}
            <ContainerKeyed control={control} data={data} index={index} />
        </li>
    )
}
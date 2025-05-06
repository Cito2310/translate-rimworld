import { Control, Controller, UseFormRegister } from "react-hook-form";
import { Keyed } from "../../../core/types/keyed";
import { DefInjected } from "../../../core/types/defInjected";
import { TitleTranslate } from "./TitleTranslate";
import TextareaAutosize from 'react-textarea-autosize';

interface props {
    register: UseFormRegister<{values: (Keyed | DefInjected)[]}>
    data: DefInjected
    index: number
    control: Control<any>
}

export const ItemListDefInjected = ({ data, index, register, control }: props) => {
    const { base, isFirstBase, isFirstItem, isFirstType, name, original, text, type } = data;

    return (
        <li className="text-[#ddd] list-none">
            {/* PARTE PARA AÑADIR EL TITULO DEFINJECTED */}
            {isFirstItem ? <TitleTranslate label="DefInjected" type="title" /> : null}


            {/* PARTE DONDE AÑADE EL TIPO DE DEFINJECTED */}
            {isFirstType ? <TitleTranslate label={type} type="type" /> : null}


            {/* PARTE DONDE AÑADE EL NOMBRE DE LA BASE DEL GRUPO */}
            {isFirstBase ? <TitleTranslate label={base} type="base" /> : null}


            {/* PARTE DONDE ESTAN CADA UNO DE LOS TEXTOS A TRADUCIR */}
            <label>{name.split(".").slice(1).join(".")}</label>

            <Controller
            name={`values.${index}.text`}
            control={control}
            render={({ field }) => (
              <TextareaAutosize
                {...field}
                minRows={1}
                maxRows={10}
                className="outline-none w-[100%] rounded px-1.5 py-.5 bg-[#363636]"
              />
            )}
          />

        </li>
    )
}
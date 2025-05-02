import { useForm } from "react-hook-form"
import { InputSelectFile } from "../components/InputSelectFile"
import { InputBasic } from "../components/InputBasic"
import { useReadFile } from "../hook/useReadFile";
import { formatTextForCompare } from "../utils/formatTextForCompare";
import { useState } from "react";
import { Keyed } from "../../../core/types/keyed";
import { DefInjected } from "../../../core/types/defInjected";
import { DataTranslate } from "../../../core/types/dataTranslate";
import { compareDataTranslate } from "../utils/compareDataTranslate";

interface stateDataTranslate { 
    translate: DataTranslate | null;
    exclude: DataTranslate | null;
}
const initStateDataTranslate:stateDataTranslate = { exclude: null, translate: null }

export const StartProjectPage = () => {
    const { register } = useForm();
    const [dataTranslate, setDataTranslate] = useState(initStateDataTranslate)


    const [onReadFileExclude, dataFileExclude, nameFileExclude] = useReadFile(
        (text: string) => {setDataTranslate({...dataTranslate, exclude: formatTextForCompare(text)})})
    const [onReadFileTranslate, dataFileTranslate, nameFileTranslate] = useReadFile(
        (text: string) => {setDataTranslate({...dataTranslate, translate: formatTextForCompare(text)})})
    
        
    const onNewProject = () => {
        if (dataTranslate.exclude === null) return console.log("Faltan los datos a excluir");
        if (dataTranslate.translate === null) return console.log("Faltan los datos a traducir");
        
        // @ts-ignore
        console.log(compareDataTranslate(dataTranslate))
    }

    return (
        <div className="bg-[#1f1f1f] text-[#ddd] flex flex-col gap-3">
            <h1>Nuevo Proyecto</h1>

            <InputBasic 
                placeholder="Nombre del proyecto:"
                register={register("nameProject")}
                label="Nombre del proyecto :"
            />

            <InputSelectFile
                nameFile={nameFileExclude}
                onReadFile={onReadFileExclude}
                idUnique="input-exclude"
                label="Archivo a excluir :"
                textInput="Archivo a excluir"
                className="w-[300px]"
            />

            <InputSelectFile
                nameFile={nameFileTranslate}
                onReadFile={onReadFileTranslate}
                idUnique="input-translate"
                label="Archivo a traducir :"
                textInput="Archivo a excluir"
                className="w-[300px]"
            />

            <button className={`
                w-[150px]
                bg-[#303030] text-[#ddd]
                p-3 py-1 rounded
            `}
                onClick={onNewProject}
            >
                Crear Proyecto
            </button>
        </div>
    )
}
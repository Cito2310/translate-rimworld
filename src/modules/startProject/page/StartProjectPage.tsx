import { useForm } from "react-hook-form"
import { InputSelectFile } from "../components/InputSelectFile"
import { InputBasic } from "../components/InputBasic"
import { useReadFile } from "../hook/useReadFile";
import { formatTextForCompare } from "../utils/formatTextForCompare";

export const StartProjectPage = () => {
    const { register } = useForm();
    const [onReadFileExclude, dataFileExclude, nameFileExclude] = useReadFile((text: string) => {console.log(formatTextForCompare(text))})
    const [onReadFileTranslate, dataFileTranslate, nameFileTranslate] = useReadFile((text: string) => {console.log(formatTextForCompare(text))})
    

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
            `}>
                Crear Proyecto
            </button>
        </div>
    )
}
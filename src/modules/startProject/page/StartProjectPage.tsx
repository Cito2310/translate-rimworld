import { useForm } from "react-hook-form"
import { InputSelectFile } from "../components/InputSelectFile"
import { InputBasic } from "../components/InputBasic"

export const StartProjectPage = () => {
    const { register } = useForm()

    return (
        <div className="bg-[#1f1f1f] text-[#ddd] flex flex-col gap-3">
            <h1>Nuevo Proyecto</h1>

            <InputBasic 
                placeholder="Nombre del proyecto:"
                register={register("nameProject")}
                label="Nombre del proyecto :"
            />

            <InputSelectFile
                funcSelectFile={(e: string) => console.log(e)}
                idUnique="input-exclude"
                label="Archivo a excluir :"
                textInput="Archivo a excluir"
                className="w-[300px]"
            />

            <InputSelectFile
                funcSelectFile={(e: string) => console.log(e)}
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
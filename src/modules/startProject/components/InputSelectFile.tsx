import { useReadFile } from "../hook/useReadFile"

interface props {
    funcSelectFile: (e: string) => void
    idUnique: string;
    label: string;
    className?: string;
    textInput: string;
}

export const InputSelectFile = ({ funcSelectFile, idUnique, label, className, textInput }: props) => {
    const [onReadFile, dataFile, nameFile] = useReadFile(funcSelectFile)
    return (
        <div className="flex items-center gap-3 text-[#ddd]">
            <label>{label}</label>

            <div className="flex flex-row items-center">
                {/* IGNORAR LA LINEA DE ABAJO */}
                <input type="file" id={idUnique} onChange={onReadFile} hidden />


                <label
                htmlFor={idUnique}
                className={`
                    ${className}
                    bg-[#303030] text-[#ddd]
                    ${nameFile ? "text-left" : "text-center"}
                    p-3 py-1 rounded
                    cursor-pointer
                    hover:brightness-95 active:brightness-[.80] transition-base
                `}>
                    {
                        nameFile || textInput
                    }
                </label>

                {/* ACTIVAR LA SIGUIENTE LINEA SI SE DESEA QUE APAREZCA EL NOMBRE DEL ARCHIVO A UN COSTADO */}
                {/* <label className="text-sm text-slate-500">{nameFile}</label> */}
            </div>
        </div>
    )
}
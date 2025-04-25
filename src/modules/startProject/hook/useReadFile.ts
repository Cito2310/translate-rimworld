import { useState } from "react";

// CustomHook que debe ser usado junto a un input file, para leer el archivo seleccionado y manejarlo

// PROPS
// - callbackReadData = Función que se ejecutara cuando se seleccione el archivo a leer
type returnUseReadFile = [
    (e: React.ChangeEvent<HTMLInputElement>) => null | undefined,
    string | null,
    string | null
]

export const useReadFile = ( callbackReadData: (text: string) => void): returnUseReadFile => {
    // Mantiene los datos leidos para verlos en el futuro
    const [dataFile, setDataFile] = useState<null | string>(null);
    const [nameFile, setNameFile] = useState<null | string>(null);

    // Funcion que se debe utilizar dentro de un input file para leer el archivo seleccionado
    // Siempre se guardara los datos leidos en el state dataFile
    // Tambien se ejecutara la función callbackReadData
    const onReadFile = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        const files = e.target.files
        if (files === null) return null;
        if (files[0] === undefined) return null;
        
        setNameFile(files[0].name)
        const reader = new FileReader();
        reader.onload = ( e: ProgressEvent<FileReader> ) => {
            if ( typeof e.target?.result === "string" ) {
                const data = e.target.result;
                setDataFile(data);
                callbackReadData(data);
            }
        }
    
        reader.readAsText(files[0])
      }

    return [ onReadFile, dataFile, nameFile ]
}
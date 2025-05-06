import { useState } from "react";
import { useForm } from "react-hook-form";
import { useReadFile } from "./useReadFile";
import { formatTextForCompare } from "../utils/formatTextForCompare";
import { compareDataTranslateAndParse } from "../utils/compareDataTranslateAndParse";
import { useAppDispatch } from "../../../core/store/store";
import { setCurrentProject } from "../../../core/store/currentProject/currentProjectSlice";
import { DataToCompare } from "../../../core/types/dataToCompare";

interface stateDataToTranslate { 
    translate: DataToCompare | null;
    exclude: DataToCompare | null;
}

const initStateDataToTranslate:stateDataToTranslate = { exclude: null, translate: null }

export const useStartProjectPage = () => {
    const { register, getValues } = useForm();
    const dispatch = useAppDispatch();
    const [dataToTranslate, setDataToTranslate] = useState(initStateDataToTranslate);


    const [onReadFileExclude, dataFileExclude, nameFileExclude] = useReadFile(
        (text: string) => {setDataToTranslate({...dataToTranslate, exclude: formatTextForCompare(text)})})
    const [onReadFileTranslate, dataFileTranslate, nameFileTranslate] = useReadFile(
        (text: string) => {setDataToTranslate({...dataToTranslate, translate: formatTextForCompare(text)})})
    
        
    const onNewProject = () => {
        if (dataToTranslate.exclude === null) return console.log("Faltan los datos a excluir");
        if (dataToTranslate.translate === null) return console.log("Faltan los datos a traducir");
        
        // @ts-ignore
        const comparedData = compareDataTranslateAndParse(dataToTranslate);
        const nameProject = getValues("nameProject");

        dispatch(setCurrentProject({
            data: comparedData,
            name: nameProject,
        }))
    }

    
    return { register, onReadFileExclude, onReadFileTranslate, nameFileExclude, nameFileTranslate, onNewProject, getValues }
}
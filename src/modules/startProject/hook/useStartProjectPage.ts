import { useState } from "react";
import { useForm } from "react-hook-form";
import { useReadFile } from "./useReadFile";
import { formatTextForCompare } from "../utils/formatTextForCompare";
import { DataTranslate } from "../../../core/types/dataTranslate";
import { compareDataTranslate } from "../utils/compareDataTranslate";
import { useAppDispatch } from "../../../core/store/store";
import { setCurrentProject } from "../../../core/store/currentProject/currentProjectSlice";

interface stateDataTranslate { 
    translate: DataTranslate | null;
    exclude: DataTranslate | null;
}

const initStateDataTranslate:stateDataTranslate = { exclude: null, translate: null }

export const useStartProjectPage = () => {
    const { register, getValues } = useForm();
    const dispatch = useAppDispatch();
    const [dataTranslate, setDataTranslate] = useState(initStateDataTranslate);


    const [onReadFileExclude, dataFileExclude, nameFileExclude] = useReadFile(
        (text: string) => {setDataTranslate({...dataTranslate, exclude: formatTextForCompare(text)})})
    const [onReadFileTranslate, dataFileTranslate, nameFileTranslate] = useReadFile(
        (text: string) => {setDataTranslate({...dataTranslate, translate: formatTextForCompare(text)})})
    
        
    const onNewProject = () => {
        if (dataTranslate.exclude === null) return console.log("Faltan los datos a excluir");
        if (dataTranslate.translate === null) return console.log("Faltan los datos a traducir");
        
        // @ts-ignore
        const comparedData = compareDataTranslate(dataTranslate);
        const nameProject = getValues("nameProject");

        dispatch(setCurrentProject({
            data: comparedData,
            name: nameProject,
        }))
    }

    
    return { register, onReadFileExclude, onReadFileTranslate, nameFileExclude, nameFileTranslate, onNewProject, getValues }
}
import { localStorageController } from '../../core/storage/localStorageController';
import { setCurrentProject } from '../../core/store/currentProject/currentProjectSlice';
import { useAppDispatch } from './../../core/store/store';
import { useEffect } from "react"

export const useInitApp = () => {
    const dispatch = useAppDispatch();

    // Carga los datos de la aplicación al cargar por primera vez
    useEffect(() => {
        const localStorageCurrentProject = localStorageController.get("current-project");
        if (localStorageCurrentProject !== null) {
            dispatch( setCurrentProject({
                name: localStorageCurrentProject.name, 
                data: localStorageCurrentProject.data
            }) )
        }
    }, [])
}
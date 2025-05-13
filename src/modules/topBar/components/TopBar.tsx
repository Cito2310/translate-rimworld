import { fileSystemAccessController } from "../../../core/storage/fileSystemAccessController";
import { setCurrentProject, setNotProject } from "../../../core/store/currentProject/currentProjectSlice";
import { useAppDispatch, useAppSelector } from "../../../core/store/store"
import { DropdownMenu } from "./DropdownMenu"

export const TopBar = () => {
    const dispatch = useAppDispatch();
    const { existData, ...restData } = useAppSelector( state => state.currentProject )
    
    const onNewProject = () => {
        dispatch(setNotProject())
    }

    const onOpenProject = async() => {
        const data =  await fileSystemAccessController.get({
            extension: "json",
        })

        dispatch(setCurrentProject(data))
    }

    const onSaveProject = async() => {
        fileSystemAccessController.save({
            data: restData,
            extension: "json",
            nameFile: restData.name
        })
    }

    const onExportProject = () => {
        // TODO export project

    }

    return (
        <div className="fixed bg-[#292929] w-full h-[32px] z-20">
            <DropdownMenu label="Proyecto" menu={[
                {func: onNewProject, label: "Nuevo Proyecto"},
                {func: onOpenProject, label: "Abrir Proyecto"},
                {func: onSaveProject, label: "Guardar Proyecto"},
                {func: onExportProject, label: "Exportar Proyecto"},
            ]}/>
        </div>
    )
}
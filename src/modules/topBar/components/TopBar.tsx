import { DropdownMenu } from "./DropdownMenu"

export const TopBar = () => {
    return (
        <div className="fixed bg-[#292929] w-full h-[32px] z-20">
            <DropdownMenu label="Proyecto" menu={[
                {func: console.log, label: "Nuevo Proyecto"},
                {func: console.log, label: "Abrir Proyecto"},
                {func: console.log, label: "Guardar Proyecto"},
                {func: console.log, label: "Exportar Proyecto"},
            ]}/>
        </div>
    )
}
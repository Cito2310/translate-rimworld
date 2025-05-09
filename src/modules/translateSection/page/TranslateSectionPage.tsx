import { Virtuoso } from "react-virtuoso";
import { ItemListDefInjected } from "../components/ItemListDefInjected"
import { ItemListKeyed } from "../components/ItemListKeyed"
import { useTranslateSection } from "../hook/useTranslateSection"

export const TranslateSectionPage = () => {
    const { control, register, joinedData } = useTranslateSection();

    return (
        <div className="h-screen">
            <Virtuoso
                style={{ height: '100%' }}
                data={joinedData}
                itemContent={(index, data) => {
                    if ("type" in data) return <ItemListDefInjected 
                        control={control} key={data.name} 
                        data={data} index={index} register={register} /> 

                    return   <ItemListKeyed 
                        control={control} key={data.name} 
                        data={data} index={index} register={register} />
                }}
                components={{
                    Header: () => <div style={{ height: "32px" }}/>,
                    Footer: () => <div style={{ height: '50px' }} />
                }}
            />
        </div>
    )
}
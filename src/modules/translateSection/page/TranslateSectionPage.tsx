import { ItemListDefInjected } from "../components/ItemListDefInjected"
import { ItemListKeyed } from "../components/ItemListKeyed"
import { useTranslateSection } from "../hook/useTranslateSection"

export const TranslateSectionPage = () => {
    const { control, register, joinedData } = useTranslateSection();

    return (
        <div className="px-4 py-2">
            {
                joinedData.map((data, index) => {
                    if ("type" in data) return <ItemListDefInjected control={control} key={data.name} data={data} index={index} register={register} /> 

                    return   <ItemListKeyed key={data.name} data={data} index={index} register={register} />
                })
            }
        </div>
    )
}
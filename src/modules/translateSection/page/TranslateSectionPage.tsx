import { useEffect, useState } from "react"
import { useAppSelector } from "../../../core/store/store"
import { DefInjected } from "../../../core/types/defInjected"
import { Keyed } from "../../../core/types/keyed"
import { useForm } from "react-hook-form"
import { ItemListDefInjected } from "../components/ItemListDefInjected"
import { ItemListKeyed } from "../components/ItemListKeyed"

export const TranslateSectionPage = () => {
    const { data, existData, lastSave, name } = useAppSelector(state => state.currentProject)
    const [joinedData, setJoinedData] = useState<(Keyed | DefInjected)[]>([...data.defInjected, ...data.keyed]);
    useEffect(() => { setJoinedData([...data.defInjected, ...data.keyed]) }, [data]);
    const { register } = useForm({ defaultValues: {values: joinedData} });

    return (
        <div>
            {
                joinedData.map((data, index) => {
                    if ("type" in data) return <ItemListDefInjected key={data.name} data={data} index={index} register={register} /> 

                    return   <ItemListKeyed key={data.name} data={data} index={index} register={register} />
                })
            }
        </div>
    )
}
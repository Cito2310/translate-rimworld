import { useEffect, useState } from "react"
import { useAppSelector } from "../../../core/store/store"
import { DefInjected } from "../../../core/types/defInjected"
import { Keyed } from "../../../core/types/keyed"
import { useForm } from "react-hook-form"

export const TranslateSectionPage = () => {
    const { data, existData, lastSave, name } = useAppSelector(state => state.currentProject)
    const [joinedData, setJoinedData] = useState<(Keyed | DefInjected)[]>([...data.defInjected, ...data.keyed]);
    useEffect(() => { setJoinedData([...data.defInjected, ...data.keyed]) }, [data]);
    const { register, getValues } = useForm({ defaultValues: {values: joinedData} });

    return (
        <div>
            {
                joinedData.map((data, index) => {
                    const { name, original, text, isFirstItem } = data;
                    if ("type" in data) {
                        const { base, isFirstBase, isFirstType, type } = data;
                        console.log(data)

                        return <li className="text-[#ddd]">
                            {isFirstItem ? <h1>DefInjected</h1> : null}
                            {isFirstType ? <h2>{type}</h2> : null}
                            {isFirstBase ? <h4>{base}</h4> : null}
                            <label>{data.name}</label>
                            <input {...register(`values.${index}.text`)}></input>
                        </li>
                    } 

                    return   <li></li>
                })
            }
        </div>
    )
}
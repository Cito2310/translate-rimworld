import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAppSelector } from "../../../core/store/store";
import { DefInjected } from "../../../core/types/defInjected";
import { Keyed } from "../../../core/types/keyed";

export const useTranslateSection = () => {
    const { data, existData, lastSave, name } = useAppSelector(state => state.currentProject)
    const [joinedData, setJoinedData] = useState<(Keyed | DefInjected)[]>([...data.defInjected, ...data.keyed]);
    useEffect(() => { setJoinedData([...data.defInjected, ...data.keyed]) }, [data]);
    const { register, control } = useForm({ defaultValues: {values: joinedData} });

    return {
        data, register, control, joinedData
    }
}
import { Control, Controller } from "react-hook-form"
import { Keyed } from "../../../core/types/keyed"
import { useAppDispatch } from "../../../core/store/store"
import { toggleCompleteWithName } from "../../../core/store/currentProject/currentProjectSlice"
import { ButtonContainer } from "./ButtonContainer"
import TextareaAutosize from 'react-textarea-autosize';

interface props {
    control: Control<any>
    data: Keyed
    index: number
}

export const ContainerKeyed = ({ control, data, index }: props) => {
    const { name, original, text, isComplete } = data;
    const dispatch = useAppDispatch();
    const onToggleComplete = () => dispatch(toggleCompleteWithName({ name: name, type: "defInjected" }))

    return (
        <div className="flex gap-1 mb-2">
            <div className="flex flex-col gap-1 w-full">
                <div className="flex justify-between">
                    <div className="flex gap-2 items-end">
                        <label className="ml-1">{name.split(".").slice(1).join(".")}</label>
                        {isComplete ? <p className="text-xs text-[#74da74]">Completado</p> : null} 
                    </div>

                    <div className="flex gap-1">
                            <ButtonContainer onClick={()=>console.log} type="regular" icon="r" />
                            <ButtonContainer onClick={()=>console.log} type="regular" icon="translate" />

                        {
                            isComplete
                            ? <ButtonContainer onClick={onToggleComplete} type="complete" icon="check" />
                            : <ButtonContainer onClick={onToggleComplete} type="regular" icon="xcross" />
                        }
                    </div>
                </div>

                <Controller
                    name={`values.${index}.text`}
                    control={control}
                    render={({ field }) => (
                        <TextareaAutosize
                            {...field}
                            minRows={1}
                            maxRows={10}
                            className="outline-none w-[100%] rounded px-1.5 py-.5 bg-[#363636]"
                        />
                )}/>
        </div> 
    </div>)
}

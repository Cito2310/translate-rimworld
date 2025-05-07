import { createSlice } from '@reduxjs/toolkit';
import { Keyed } from '../../types/keyed';
import { DefInjected } from '../../types/defInjected';

export interface CurrentProjectState {
    name: string;
    data: {
        keyed: Keyed[];
        defInjected: DefInjected[];
    };
    existData: boolean;
    lastSave: number | null;
}

const initialState: CurrentProjectState = {
    name: "",
    data: {
        keyed: [],
        defInjected: [],
    },
    existData: false,
    lastSave: null
}


export const currentProjectSlice = createSlice({
    name: 'currentProject',
    initialState,
    reducers: {

        changeName: ( state, action: { payload: string } ) => {
            state.name = action.payload;
        },

        setCurrentProject: ( state, action: { payload: { data: { keyed: Keyed[]; defInjected: DefInjected[] }, name: string } } ) => {
            state.name = action.payload.name;
            state.data = action.payload.data;
            state.existData = true;
        },

        toggleCompleteWithName: ( state, action: { payload: { name: string, type: "keyed" | "defInjected" } } ) => {
            const findElement = state.data[action.payload.type].find( item => item.name === action.payload.name );
            
            if (!findElement) throw new Error("No se encontro el efecto");

            findElement.isComplete = !findElement.isComplete
        }

    }
});

export const { 
    setCurrentProject,
    changeName,
    toggleCompleteWithName

} = currentProjectSlice.actions;
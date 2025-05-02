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

    }
});

export const { 
    setCurrentProject,
    changeName,

} = currentProjectSlice.actions;
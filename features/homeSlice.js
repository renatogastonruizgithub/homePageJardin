import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({

    name: "home",
    initialState: {
        dataProject: [],
        dataCompany: [],
        dataEmployee: [],
        dataPublication: [],
        dataPublicationRelevant: [],
    },
    reducers: {
        setProject: (state, action) => {
            state.dataProject = action.payload
        },
        setCompany: (state, action) => {
            state.dataCompany = action.payload
        },
        setEmployee: (state, action) => {
            state.dataEmployee = action.payload
        },
        setPublication: (state, action) => {
            state.dataPublication = action.payload
        },
        setPublicationRelevant: (state, action) => {
            state.dataPublicationRelevant = action.payload
        },
    },
});

export const { setPublicationRelevant, setProject, setCompany, setEmployee, setPublication } = homeSlice.actions;
export default homeSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({

    name: "home",
    initialState: {
        dataProject: [],
        dataCompany: [],
        dataEmployee: [],
        dataPublication: [],
        dataPublicationRelevant: [],
        oneEmployee: {
            name: "",
            imageUrl: ""
        },
        onePublication: {
            title: "",
            biography: ""
        },
        onePublicationRelevant: {
            title: "",
            biography: ""
        },
        isOpen: false,
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
        setOnePublication: (state, action) => {
            state.onePublication.title = action.payload.title
            state.onePublication.biography = action.payload.biography
        },
        setPublicationRelevant: (state, action) => {
            state.dataPublicationRelevant = action.payload
        },
        setOnePublicationRelevant: (state, action) => {
            state.onePublicationRelevant.title = action.payload.title
            state.onePublicationRelevant.biography = action.payload.biography
        },
        setOneEmploye: (state, action) => {
            state.oneEmployee.imageUrl = action.payload.imageUrl
            state.oneEmployee.name = action.payload.name
        },
        openEmploye: (state, action) => {
            state.isOpen = action.payload
        },
    },
});

export const { setOnePublicationRelevant, setOnePublication, openEmploye, setOneEmploye, setPublicationRelevant, setProject, setCompany, setEmployee, setPublication } = homeSlice.actions;
export default homeSlice.reducer
import { createSlice } from "@reduxjs/toolkit";



export const gallerySlice = createSlice({

    name: "gallery",
    initialState: {
        data: [],
        isLoading: true,
        currentPage: 0,
        totalPages: 0,
        totalElements: 0,
        isOpen: false,
        oneImage: {
            url: "",
            description: ""
        }
    },
    reducers: {
        setTotalPages: (state, action) => {
            state.totalPages = action.payload

        },
        setTotalElements: (state, action) => {
            state.totalElements = action.payload

        },
        setGallery: (state, action) => {
            state.data = action.payload
            state.isLoading = false
        },

        changePage: (state, action) => {
            state.currentPage = action.payload
            state.isLoading = false
        },
        openGallery: (state, action) => {
            state.isOpen = action.payload
        },
        setOneImage: (state, action) => {
            state.oneImage.description = action.payload.description
            state.oneImage.url = action.payload.url
        },
        loadingGallery: (state, action) => {
            state.isLoading = action.payload
        },
    },
});

export const { setTotalElements, setOneImage, addGallery, deletedGallery, loadingGallery, changePage, setGallery, setTotalPages, openGallery } = gallerySlice.actions;
export default gallerySlice.reducer
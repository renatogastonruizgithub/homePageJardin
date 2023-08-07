import { configureStore } from '@reduxjs/toolkit'
import homeSlice from '../features/homeSlice'
import gallerySlice from '../features/gallerySlice'

export const store = configureStore({
    reducer: {
        home: homeSlice,
        gallery: gallerySlice
    },
})
import { api } from "../config/api"

import { addGallery, deletedGallery, setGallery, setTotalElements, setTotalPages } from './gallerySlice';


export const getGallery = () => {

    return async (dispatch, getState) => {
        try {


            const { data } = await api.get(`gallery/page?page=${getState().gallery.currentPage}`)

            dispatch(setGallery(data.content))

            dispatch(setTotalPages(data.totalPages))
            dispatch(setTotalElements(data.totalElements))

        } catch (error) {
            //eror pass incorrect


        }
    }

}

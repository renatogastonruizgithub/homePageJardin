import { api } from "../config/api"
import { setCompany, setEmployee, setProject, setPublication, setPublicationRelevant } from "./homeSlice"

export const getEmployee = () => {
    return async (dispatch, getState) => {
        try {
            const { data } = await api.get(`employee/all`)
            dispatch(setEmployee(data))

        } catch (error) {
            //eror pass incorrect
            console.log(error)
            /*    alertError(error) */
        }
    }
}
export const getCompany = () => {
    return async (dispatch, getState) => {
        try {
            const { data } = await api.get(`company/all`)
            dispatch(setCompany(data))

        } catch (error) {
            //eror pass incorrect
            console.log(error)
            /*    alertError(error) */
        }
    }
}
export const getProject = () => {
    return async (dispatch, getState) => {
        try {
            const { data } = await api.get(`project/all`)
            dispatch(setProject(data))

        } catch (error) {
            //eror pass incorrect
            console.log(error)
            /*    alertError(error) */
        }
    }
}

export const getPublication = () => {
    return async (dispatch, getState) => {
        try {
            const { data } = await api.get(`publication/all`)
            dispatch(setPublication(data))

        } catch (error) {
            //eror pass incorrect
            console.log(error)
            /*    alertError(error) */
        }
    }
}
export const getPublicationRelevant = () => {
    return async (dispatch, getState) => {
        try {
            const { data } = await api.get(`publication/relevant`)
            dispatch(setPublicationRelevant(data))

        } catch (error) {
            //eror pass incorrect
            console.log(error)
            /*    alertError(error) */
        }
    }
}

import React from 'react'
import style from "../styles/loading.module.scss"
import { Box } from '@mui/material'
const Loading = () => {
    return (
        <>
            <Box sx={{ display: "grid", placeItems: "center", backgroundColor: "#d7d7d7", width: "100%", height: "100vh", position: "fixed", zIndex: "2000" }}>
                <div className={style.loader} >
                    <div></div>
                    <div></div>
                </div>
            </Box>
        </>
    )
}
export default Loading
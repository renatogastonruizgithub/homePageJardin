import { Box, Typography } from '@mui/material'
import React from 'react'

import title from '../styles/title.module.scss'


export const Titles = ({ text, color, variant, colorTitle, textAlign }) => {

    const line = {
        backgroundColor: color
    }
    return (
        <Box sx={{ display: "grid", placeItems: textAlign }}>
            <Typography sx={{
                color: colorTitle, margin: "2rem 0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
            }} className={title.title} variant={variant}>
                {text}
                <span style={line}></span>
            </Typography>
        </Box>
    )
}

import { Typography } from '@mui/material'
import React from 'react'

import title from '../styles/title.module.scss'


export const Titles = ({ text, color, variant, colorTitle }) => {

    const line = {
        backgroundColor: color
    }
    return (
        <>
            <Typography sx={{ color: colorTitle, margin: "2rem 0" }} className={title.title} variant={variant}>
                {text}
                <span style={line}></span>
            </Typography>
        </>
    )
}

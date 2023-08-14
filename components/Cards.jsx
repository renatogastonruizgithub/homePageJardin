import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'


const Cards = ({ url, title, biography, date, onclick }) => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            height: "500px",
            marginLeft: ".6rem",
            marginRight: ".6rem"
        }}>

            <Card elevation={6} sx={{ height: "auto", overflow: "inherit", maxWidth: "100% !important", position: "relative", marginBottom: ".5rem", }}>
                <CardMedia
                    sx={{
                        height: 180, width: "90%",
                        position: "absolute",
                        top: "-100px",
                        left: "50%",
                        transform: "translate(-50%,0)",
                        borderRadius: "15px"
                    }}
                    image={url}

                />
                <CardContent sx={{ paddingTop: "6rem" }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography sx={{
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        width: "90%",
                        textAlign: "center"
                    }} variant="body2" color="text.secondary">
                        {biography}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ marginTop: "1rem" }}>
                        Publicado el {date}
                    </Typography>
                </CardContent>
                <CardActions sx={{ marginBottom: ".5rem" }}>
                    <Button sx={{ width: "100%" }} variant="outlined" onClick={onclick} size="small">Ver noticia</Button>
                </CardActions>
            </Card>
        </ Box>

    )
}

export default Cards
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const Cards = ({ url, title, biography, date }) => {
    return (
        <Card sx={{ maxWidth: "100% !important", marginBottom: ".5rem" }}>
            <CardMedia
                sx={{ height: 200, width: "100%" }}
                image={url}

            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {biography}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginTop: "1rem" }}>
                    Publicado el {date}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Ver noticia</Button>

            </CardActions>
        </Card>
    )
}

export default Cards
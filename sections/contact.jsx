import { IconButton, Button, Container, Grid, Typography, Box, Paper } from '@mui/material'
import React, { useEffect } from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useDispatch, useSelector } from 'react-redux';
import { getCompany } from '../features/thunksHome';


export const Contact = () => {
    const { dataCompany } = useSelector((state) => state.home)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCompany())
    }, [])
    return (
        <>
            <Container maxWidth="lg" id='contact' sx={{ paddingTop: "8rem", position: "relative" }}>
                <Grid container spacing={10}  >
                    <Grid item sm={8} md={8} lg={8} xs={12} sx={{ display: "flex", alignItems: "center" }} >
                        <Paper elevation={4}
                            sx={{
                                padding: "2rem",
                                display: "flex",
                                alignItems: "center",
                                flexDirection: "column",
                                justifyContent: "center",
                                position: "absolute",
                                zIndex: "1000",
                                top: "100%",
                                left: "50%",
                                width: "60%",
                                transform: "translate(-50%, -50%)"
                            }}>
                            <Typography variant='h4' sx={{ fontWeight: "900", fontSize: { sm: "1.7rem", lg: "2rem" } }}>
                                ¿Necesitas mas informacion?
                            </Typography>
                            <Typography variant='p' sx={{ fontSize: { sm: "1.1rem", lg: "1.2rem" }, marginTop: ".5rem" }}>
                                !Estamos para ayudarte, ponte en contacto con nosotros!
                            </Typography>
                            {
                                dataCompany.map((data, i) => {
                                    return (
                                        <Button key={i} sx={{ marginTop: "2.2rem" }} href={`https://api.whatsapp.com/send?phone=${data.linkLk},%20&text=Hola! quiero mas informacion`} target='_blank' startIcon={<WhatsAppIcon sx={{ color: "#fff" }} fontSize="medium" />} variant="contained" size='large' >
                                            Escribinos por aqui
                                        </Button>
                                    )
                                })
                            }

                        </Paper>
                    </Grid>

                </Grid>
            </Container>

        </>

    )
}

import { IconButton, Button, Container, Grid, Typography, Box } from '@mui/material'
import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Image from 'next/image';

export const Contact = () => {
    return (
        <>
            <Container maxWidth="lg" id='contact'>
                <Grid container spacing={10}  >
                    <Grid item sm={8} md={8} lg={8} xs={12} sx={{ display: "flex", alignItems: "center" }} >
                        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center" }}>
                            <Typography variant='h4' sx={{ fontWeight: "900", fontSize: { sm: "1.7rem", lg: "2rem" } }}>
                                ¿Necesitas mas informacion?
                            </Typography>
                            <Typography variant='p' sx={{ fontSize: { sm: "1.1rem", lg: "1.2rem" }, marginTop: ".5rem" }}>
                                !Estamos para ayudarte, ponte en contacto con nosotros!
                            </Typography>
                            <Button sx={{ marginTop: "2.2rem" }} startIcon={<WhatsAppIcon sx={{ color: "#fff" }} fontSize="medium" />} variant="contained" size='large' >
                                Escribinos por aqui
                            </Button>
                        </Box>
                    </Grid>
                    {/*  <Grid item sm={4} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                        <Image alt='contact' src="/assets/contact.png" width={300} height={300} />
                    </Grid> */}
                </Grid>
            </Container>

        </>

    )
}

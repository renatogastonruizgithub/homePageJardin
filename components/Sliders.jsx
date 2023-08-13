import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import ReactDOM from 'react-dom'; // Importa ReactDOM para Portals
import { Grid, Container, Box } from '@mui/material';

const Sliders = ({ children, prevButtonRef, nextButtonRef }) => {
    const navigationNextRef = useRef(null);
    const navigationPrevRef = useRef(null);
    return (
        <Container maxWidth="lg" sx={{ marginTop: "6rem", marginBottom: "0rem" }}>

            <Grid container spacing={10}>
                <Grid item xs={12} md={12} >
                    <Box sx={{
                        borderRadius: "7px",
                        position: "relative", display: "flex",
                        alignItems: "center", justifyContent: "center",
                        paddingLeft: "3rem", paddingRight: "3rem"
                    }}>
                        <Swiper
                            breakpoints={{
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 50
                                },
                                1440: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,

                                }

                            }}

                            navigation={{
                                prevEl: navigationPrevRef.current,
                                nextEl: navigationNextRef.current,
                            }}

                            onBeforeInit={(swiper) => {
                                swiper.navigation.nextEl = navigationNextRef.current;
                                swiper.navigation.prevEl = navigationPrevRef.current;
                            }}

                            modules={[Autoplay, Navigation]}
                            initialSlide={0}
                            className="mySwiper"
                            centeredSlides={false}
                        >
                            {children}
                        </Swiper>

                        <div ref={navigationNextRef} id={nextButtonRef} className="swiper-button-next" ></div>
                        <div ref={navigationPrevRef} id={prevButtonRef} className="swiper-button-prev" ></div>
                    </Box>

                </Grid>
            </Grid>

        </Container>
    )
}

export default Sliders


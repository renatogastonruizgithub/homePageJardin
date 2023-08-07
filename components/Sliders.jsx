import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";

import { Grid, Typography, Container, Box } from '@mui/material';

const Sliders = ({ children, nextButtonId, prevButtonId }) => {
    return (
        <Container maxWidth="lg" sx={{ marginTop: "6rem", marginBottom: "6rem" }}>

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
                                    spaceBetween: 10,
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
                                nextEl: `.swiper-button-next ${nextButtonId}`,
                                prevEl: `.swiper-button-prev ${prevButtonId}`,

                            }}
                            modules={[Autoplay, Navigation]}
                            initialSlide={0}


                            className="mySwiper"
                            centeredSlides={false}
                        /*  onSlideChange={() => console.log('slide change')}
                         onSwiper={(swiper) => console.log(swiper)} */
                        >
                            {children}


                        </Swiper>

                        <div className={`swiper-button-next ${nextButtonId}`}></div>
                        <div className={`swiper-button-prev ${prevButtonId}`}></div>
                    </Box>

                </Grid>
            </Grid>

        </Container>
    )
}

export default Sliders
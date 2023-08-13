import React, { useCallback, useEffect, useRef, useState } from 'react'
import { LayuotSecondary } from '../layouts/secondaryPages/layuotSecondary'
import { BannerLayouts } from '../sections/bannerLayouts'
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import { CardMedia, Grid, Stack, Typography, } from '@mui/material';

import { Titles } from '../components/titles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import { useDispatch, useSelector } from 'react-redux';
import { getPublication, getPublicationRelevant } from '../features/thunksHome';
import Cards from '../components/Cards';
import Sliders from '../components/Sliders';
import Modals from '../components/Modals';
import { setOnePublication } from '../features/homeSlice';

export const ViewNoticie = ({ title, biography }) => {
    return (
        <Stack direction="column" spacing={4} sx={{ padding: { xs: "1rem" } }}>
            <Typography variant='h4'>{title}</Typography>
            <Typography variant="body2">{biography}</Typography>
        </Stack>
    )
}



const Noticias = () => {
    const { dataPublication, dataPublicationRelevant, onePublication } = useSelector((state) => state.home)
    const dispatch = useDispatch()
    const [open, setopen] = useState(false)

    useEffect(() => {
        dispatch(getPublication())
        dispatch(getPublicationRelevant())
    }, [])

    const openModal = useCallback(() => {
        setopen(!open)
    }, [open])


    const viewNoticeModal = useCallback((title, biography) => {
        dispatch(setOnePublication({ title, biography }))
        openModal();
    }, [dispatch, openModal]);



    return (
        <>
            <LayuotSecondary>
                <BannerLayouts title={"Noticias"} itemData={dataPublication}></BannerLayouts>



                <Container maxWidth="lg" sx={{ marginTop: "4rem", marginBottom: "2rem" }}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <Titles colorTitle={"#000"}
                                color={"#ff3366"}
                                variant={"h4"}
                                text="Noticias importantes"
                            />
                        </Grid>
                    </Grid>

                </Container>

                <Container maxWidth="lg" sx={{ marginTop: "0rem", marginBottom: "4rem" }}>

                    <Grid container spacing={1}>
                        <Grid item xs={12} md={12} >
                            <Box sx={{
                                borderRadius: "7px",
                                position: "relative", display: "flex",
                                alignItems: "center", justifyContent: "center",
                                paddingLeft: "3rem", paddingRight: "3rem",
                            }}>
                                <Swiper
                                    breakpoints={{
                                        320: {
                                            slidesPerView: 1,
                                            spaceBetween: 50
                                        },
                                        768: {
                                            slidesPerView: 1,
                                            spaceBetween: 100,
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
                                        prevEl: ".swiper-button-prev",
                                        nextEl: ".swiper-button-next",
                                    }}



                                    modules={[Autoplay, Navigation]}
                                    initialSlide={0}
                                    className="mySwiper"
                                    autoplay={true}
                                    centeredSlides={false}
                                >
                                    {
                                        dataPublicationRelevant.map((data, i) => {
                                            return (

                                                <SwiperSlide key={i}>
                                                    <Cards
                                                        url={data.imageUrl}
                                                        title={data.title}
                                                        biography={data.biography}
                                                        date={data.date_creation}
                                                        onclick={() => viewNoticeModal(data.title, data.biography)}
                                                    />
                                                </SwiperSlide>
                                            )
                                        })

                                    }
                                </Swiper>
                                <div id="nextOur" className="swiper-button-next" ></div>
                                <div id="prevOur" className="swiper-button-prev" ></div>
                            </Box>

                        </Grid>
                    </Grid>

                </Container>



                <Container maxWidth="lg" sx={{ marginTop: "0rem", marginBottom: "4rem" }}>

                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <Titles colorTitle={"#000"}
                                color={"#ff3366"}
                                variant={"h4"}
                                text="Todas las noticias"
                            />
                        </Grid>
                    </Grid>
                </Container>

                <Container maxWidth="lg" sx={{ marginTop: "0rem", marginBottom: "4rem" }}>

                    <Grid container spacing={1}>
                        <Grid item xs={12} md={12} >
                            <Box sx={{
                                borderRadius: "7px",
                                position: "relative", display: "flex",
                                alignItems: "center", justifyContent: "center",
                                paddingLeft: "3rem", paddingRight: "3rem",
                            }}>
                                <Swiper
                                    breakpoints={{
                                        320: {
                                            slidesPerView: 1,
                                            spaceBetween: 50
                                        },
                                        768: {
                                            slidesPerView: 1,
                                            spaceBetween: 100,
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
                                        prevEl: ".swiper-button-prev",
                                        nextEl: ".swiper-button-next",
                                    }}



                                    modules={[Autoplay, Navigation]}
                                    initialSlide={0}
                                    className="mySwiper"
                                    autoplay={true}
                                    centeredSlides={false}
                                >
                                    {
                                        dataPublication.map((data, i) => {
                                            return (

                                                <SwiperSlide key={i}>
                                                    <Cards
                                                        url={data.imageUrl}
                                                        title={data.title}
                                                        biography={data.biography}
                                                        date={data.date_creation}
                                                        onclick={() => viewNoticeModal(data.title, data.biography)}
                                                    />
                                                </SwiperSlide>
                                            )
                                        })

                                    }
                                </Swiper>
                                <div id="nextOur" className="swiper-button-next" ></div>
                                <div id="prevOur" className="swiper-button-prev" ></div>
                            </Box>

                        </Grid>
                    </Grid>

                </Container>

            </LayuotSecondary >
            <Modals
                open={open}
                handleClose={openModal}
                form={<ViewNoticie title={onePublication.title} biography={onePublication.biography} />}
                maxWidth="md"
            />
        </>
    )
}
export default Noticias





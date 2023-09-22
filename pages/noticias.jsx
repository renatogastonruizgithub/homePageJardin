import React, { useCallback, useEffect, useRef, useState } from 'react'
import { LayuotSecondary } from '../layouts/secondaryPages/layuotSecondary'
import { BannerLayouts } from '../sections/bannerLayouts'
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import { Grid, Stack, Typography, } from '@mui/material';

import { Titles } from '../components/titles';
import { SwiperSlide } from 'swiper/react';

import { useDispatch, useSelector } from 'react-redux';
import { getPublication, getPublicationRelevant } from '../features/thunksHome';
import Cards from '../components/Cards';

import Modals from '../components/Modals';
import { setOnePublication } from '../features/homeSlice';
import FormatDate from '../components/FormatDate';
import Sliders from '../components/Sliders';


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



                <Container maxWidth="lg" sx={{ marginTop: "4rem", marginBottom: "0" }}>
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

                <Container maxWidth="lg" sx={{ marginTop: "0rem", marginBottom: "0rem" }}>

                    <Grid container spacing={1}>
                        <Grid item xs={12} md={12}  >
                            <Box sx={{
                                borderRadius: "7px",
                                position: "relative",

                            }}>
                                <Sliders AutoplayDelay={4000}
                                    centeredSlides={false}
                                    slidesPerViewMobile={1}
                                    slidesPerViewTablet={3}
                                    slidesPerViewDesktop={3}
                                >

                                    {
                                        dataPublicationRelevant.map((data, i) => {
                                            return (

                                                <SwiperSlide key={i}>
                                                    <Cards
                                                        url={data.imageUrl}
                                                        title={data.title}
                                                        biography={data.biography}
                                                        date={<FormatDate data={data.date_creation} />}
                                                        onclick={() => viewNoticeModal(data.title, data.biography)}
                                                    />
                                                </SwiperSlide>
                                            )
                                        })

                                    }
                                </Sliders>
                            </Box>

                        </Grid>
                    </Grid>

                </Container>



                <Container maxWidth="lg" sx={{ marginTop: "0rem", marginBottom: "0" }}>

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
                                position: "relative",

                            }}>
                                <Sliders AutoplayDelay={4000}
                                    centeredSlides={false}
                                    navegation={true}
                                    slidesPerViewMobile={1}
                                    slidesPerViewTablet={3}
                                    slidesPerViewDesktop={3}
                                >

                                    {
                                        dataPublication.map((data, i) => {
                                            return (

                                                <SwiperSlide key={i}>
                                                    <Cards
                                                        url={data.imageUrl}
                                                        title={data.title}
                                                        biography={data.biography}
                                                        date={<FormatDate data={data.date_creation} />}
                                                        onclick={() => viewNoticeModal(data.title, data.biography)}
                                                    />
                                                </SwiperSlide>
                                            )
                                        })

                                    }
                                </Sliders>
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





import React, { useEffect } from 'react'
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
import Cards from '../components/cards';
import Sliders from '../components/Sliders';




const Noticias = () => {
    const { dataPublication, dataPublicationRelevant } = useSelector((state) => state.home)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPublication())
        dispatch(getPublicationRelevant())
    }, [])



    return (
        <>
            <LayuotSecondary>
                <BannerLayouts title={"Noticias"} itemData={dataPublication}></BannerLayouts>

                <Container maxWidth="lg" sx={{ marginTop: "4rem", marginBottom: "4rem" }}>
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
                <Sliders nextButtonId="reNext" prevButtonId="rePrev">
                    {
                        dataPublicationRelevant.map((data, i) => {
                            return (

                                <SwiperSlide key={i}>

                                    <Cards
                                        url={data.imageUrl}
                                        title={data.title}
                                        biography={data.biography}
                                        date={data.date_creation}
                                    />


                                </SwiperSlide>

                            )
                        })

                    }
                </Sliders>


                <Container maxWidth="lg" sx={{ marginTop: "6rem", marginBottom: "6rem" }}>

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
                <Sliders nextButtonId="puNext" prevButtonId="puPrev">
                    {
                        dataPublication.map((data, i) => {
                            return (

                                <SwiperSlide key={i}>

                                    <Cards
                                        url={data.imageUrl}
                                        title={data.title}
                                        biography={data.biography}
                                        date={data.date_creation}
                                    />


                                </SwiperSlide>

                            )
                        })

                    }
                </Sliders>


            </LayuotSecondary >

        </>
    )
}
export default Noticias
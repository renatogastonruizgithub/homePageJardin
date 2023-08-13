import { Container } from '@mui/system'
import React, { useCallback, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import { Card, CardContent, CardMedia, Typography, Box, Stack } from '@mui/material';
import Image from 'next/image';
import our from '../styles/our.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import { useDispatch, useSelector } from 'react-redux';
import { getCompany, getEmployee } from '../features/thunksHome';
import { Titles } from '../components/titles';
import { openEmploye, setOneEmploye } from '../features/homeSlice';
import Lightbox from '../components/lightbox';



export const Our = () => {
    const fontSize = "1.3rem"

    const { dataCompany, dataEmployee, isOpen, oneEmployee } = useSelector((state) => state.home)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCompany())
        dispatch(getEmployee())
    }, [])

    const swowImage = useCallback(() => {
        dispatch(openEmploye(!isOpen));
    }, [dispatch, isOpen]);

    const viewImageModal = useCallback((imageUrl, name) => {
        dispatch(setOneEmploye({ imageUrl, name }));
        swowImage();
    }, [dispatch, swowImage]);

    return (
        <>
            <section className={our.contentSection} id="nosotros" >
                <Container maxWidth="lg">
                    {
                        dataCompany.map((our, indexs) => {
                            return (

                                <Grid key={indexs} container spacing={10} sx={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
                                    <Grid item xs={12} lg={7}>
                                        <Box sx={{ width: '100%', typography: 'body1' }}>
                                            <Stack spacing={2}>
                                                <Titles colorTitle={"#000"} color={"#ff3366"} variant={"h3"} text={our.name}></Titles>
                                                {our.biography}
                                            </Stack>

                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} lg={4} >
                                        <Box>
                                            <CardMedia component="img" className='imgGolbal'
                                                image={our.imageUrl}

                                            />
                                        </Box>
                                    </Grid>
                                </Grid>
                            )
                        })
                    }

                </Container>
                <Container maxWidth="lg" sx={{ paddingTop: "8rem" }}>
                    {
                        dataCompany.map((empresa, index) => {
                            return (

                                <Grid key={index} container spacing={10} sx={{ justifyContent: "center" }}>
                                    <Grid item md={12}>
                                        {/*  <Card sx={{ backgroundColor: "rgb(114, 181, 247 ,0.5)" }}>
                                            <CardContent> */}
                                        <Titles colorTitle={"#000"} color={"#ff3366"} variant={"h4"} text={"Perfil de los egresado"} ></Titles>
                                        <Typography variant="p" sx={{ fontSize: fontSize }} >
                                            {empresa.vision}
                                        </Typography>
                                        {/*     </CardContent>
                                        </Card> */}
                                    </Grid>
                                    <Grid item md={12}>
                                        {/*  <Card sx={{ backgroundColor: "rgb(170, 222, 133,0.5)", }}>
                                            <CardContent> */}
                                        <Titles colorTitle={"#000"} color={"#ff3366"} variant={"h4"} text={"Proyecto institucional"} ></Titles>
                                        <Typography variant="p" sx={{ fontSize: fontSize }} >
                                            {empresa.mission}
                                        </Typography>
                                        {/*    </CardContent>
                                        </Card> */}
                                    </Grid>
                                </Grid>


                            )
                        })

                    }

                </Container>

                <Container maxWidth="lg">
                    <Grid container sx={{ justifyContent: "center", marginTop: "6rem" }}>

                        <Grid item md={6} xs={12} sx={{ position: "relative" }}>
                            <Titles textAlign="center" colorTitle={"#000"} color={"#ff3366"} variant={"h4"} text={"Nuestros profes"} ></Titles>
                            <div className={our.contentSliderTeacher}>

                                <Swiper navigation={{
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev"

                                }}

                                    freeMode={true}
                                    modules={[Autoplay, Navigation]}
                                    initialSlide={0}
                                    centeredSlides={false} className="mySwiper"
                                    autoplay={true}

                                >
                                    {
                                        dataEmployee.map((employee, i) => {
                                            return (
                                                <>
                                                    <SwiperSlide key={i} className={our.slide}>

                                                        <div className={our.contentTextSlider} >
                                                            <div className={our.contentImgSlider}>
                                                                <span onClick={() => viewImageModal(employee.imageUrl, employee.name)}>Ver</span>
                                                                <img
                                                                    className={our.img}
                                                                    src={employee.imageUrl}
                                                                    alt="asd"
                                                                />
                                                            </div>
                                                            <h3>{employee.name + " " + employee.last_name}</h3>
                                                            <span>{employee.title}</span>
                                                            <Typography sx={{ marginTop: ".4rem" }} color="GrayText" variant='subtitle2' >{employee.biography}</Typography >
                                                        </div>
                                                    </SwiperSlide>
                                                </>
                                            )
                                        })
                                    }

                                </Swiper>
                                <div className="swiper-button-next nextOur"></div>
                                <div className="swiper-button-prev prevOur"></div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
                <Lightbox

                    src={oneEmployee.imageUrl}
                    open={isOpen}
                    onClosed={swowImage}
                    data={`profe ${oneEmployee.name}`}
                />
            </section>
        </>
    )
}

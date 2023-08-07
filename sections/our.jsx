import { Container } from '@mui/system'
import React, { useEffect } from 'react'
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



export const Our = () => {
    const fontSize = "1.3rem"

    const { dataCompany, dataEmployee } = useSelector((state) => state.home)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCompany())
        dispatch(getEmployee())
    }, [])

    return (
        <>
            <section className={our.contentSection} id="nosotros" >
                <Container maxWidth="lg">
                    {
                        dataCompany.map((our, indexs) => {
                            return (

                                <Grid key={indexs} container spacing={10} sx={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
                                    <Grid item xs={12} lg={6}>
                                        <Box sx={{ width: '100%', typography: 'body1' }}>
                                            <Stack spacing={2}>
                                                <Titles colorTitle={"#000"} color={"#ff3366"} variant={"h4"} text={"titulo  noticia"}></Titles>
                                                {our.biography}
                                            </Stack>

                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} lg={5} >
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
                                    <Grid item md={4}>
                                        <Card sx={{ backgroundColor: "rgb(114, 181, 247 ,0.5)" }}>
                                            <CardContent>
                                                <Titles colorTitle={"#000"} color={"#ff3366"} variant={"h3"} text={"Vision"} ></Titles>
                                                <Typography variant="p" sx={{ fontSize: fontSize }} >
                                                    {empresa.vision}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item md={4}>
                                        <Card sx={{ backgroundColor: "rgb(170, 222, 133,0.5)", }}>
                                            <CardContent>
                                                <Titles colorTitle={"#000"} color={"#ff3366"} variant={"h3"} text={"Mision"} ></Titles>
                                                <Typography variant="p" sx={{ fontSize: fontSize }} >
                                                    {empresa.mission}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>


                            )
                        })

                    }

                </Container>

                <Container maxWidth="lg">
                    <Grid container sx={{ justifyContent: "center", marginTop: "6rem" }}>

                        <Grid item md={6} xs={12} sx={{ position: "relative" }}>
                            <Titles colorTitle={"#000"} color={"#ff3366"} variant={"h3"} text={"Nuestros profes"} ></Titles>
                            <div className={our.contentSliderTeacher}>

                                <Swiper navigation={{
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev"

                                }}

                                    freeMode={true}
                                    modules={[Autoplay, Navigation]}
                                    initialSlide={0}
                                    centeredSlides={false} className="mySwiper"

                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    {
                                        dataEmployee.map((employee, i) => {
                                            return (
                                                <>
                                                    <SwiperSlide key={i} className={our.slide}>
                                                        <div className={our.contentTextSlider} >
                                                            <Image className={our.img} src={employee.imageUrl} alt="asd" height={100} width={100} />
                                                            <p>{employee.biography}</p>
                                                            <h3>{employee.name + " " + employee.last_name}</h3>
                                                            <span>{employee.title}</span>
                                                        </div>
                                                    </SwiperSlide>
                                                </>
                                            )
                                        })
                                    }

                                </Swiper>
                                <div id='nextOur' className="swiper-button-next"></div>
                                <div id='prevOur' className="swiper-button-prev"></div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>

            </section>
        </>
    )
}

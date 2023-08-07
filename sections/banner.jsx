import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Autoplay } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import banner from "../styles/banner.module.scss"
import Image from 'next/image';
import Button from '@mui/material/Button';
import { Titles } from '../components/titles';
import { getPublicationRelevant } from '../features/thunksHome';
import { useDispatch, useSelector } from 'react-redux';
import { Skeleton } from '@mui/material';


function Banner() {

    const { dataPublicationRelevant } = useSelector((state) => state.home)
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getPublicationRelevant())
    }, [])
    if (!dataPublicationRelevant || !Array.isArray(dataPublicationRelevant) || dataPublicationRelevant.length === 0) {
        return <Skeleton animation="wave" variant="rectangular" width="100%" height="100vh" />
    }

    return (
        <>
            <div className={banner.contentBanner}>
                <Swiper navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }}

                    freeMode={true}
                    modules={[Autoplay, Navigation]}
                    initialSlide={0}
                    spaceBetween={20}
                    centeredSlides={false} className="mySwiper"

                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        dataPublicationRelevant.map((publication, p) => {
                            return (
                                <SwiperSlide key={p} className={banner.slide}>
                                    <div className={banner.contentTextSlider} >
                                        <Titles colorTitle={"#fff"}
                                            color={"#ff3366"}
                                            variant={"h2"}
                                            text={publication.title}
                                        />
                                        <p>{publication.biography}</p>
                                        <Button size="medium" type="submit" variant="contained" sx={{ backgroundColor: "#ff3366" }} >
                                            Ver mas
                                        </Button>
                                    </div>
                                    <Image style={{ objectFit: "cover", width: "100%" }} className={banner.img} src={publication.imageUrl} alt="asd" fill sizes="100vw" />

                                </SwiperSlide>
                            )
                        })
                    }




                </Swiper>
                <div id='nextBanner' className="swiper-button-next" />
                <div id='prevBanner' className="swiper-button-prev" />
            </div>


        </>
    )
}

export default Banner
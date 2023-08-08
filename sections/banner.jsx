import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Autoplay, EffectCreative, Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';
import banner from "../styles/banner.module.scss"
import Image from 'next/image';
import Button from '@mui/material/Button';
import { Titles } from '../components/titles';
import { getPublicationRelevant } from '../features/thunksHome';
import { useDispatch, useSelector } from 'react-redux';
import { Skeleton } from '@mui/material';

import 'swiper/css/effect-fade';

function Banner() {

    const { dataPublicationRelevant } = useSelector((state) => state.home)
    const dispatch = useDispatch()
    const navigationNextRef = useRef(null);
    const navigationPrevRef = useRef(null);

    useEffect(() => {

        dispatch(getPublicationRelevant())
    }, [])
    if (!dataPublicationRelevant || !Array.isArray(dataPublicationRelevant) || dataPublicationRelevant.length === 0) {
        return <Skeleton animation="wave" variant="rectangular" width="100%" height="100vh" />
    }
    const sortedData = dataPublicationRelevant.slice().sort((a, b) => new Date(b.date_update) - new Date(a.date_update));
    const lastThreePublication = sortedData.slice(0, 3);


    return (
        <>
            <div className={banner.contentBanner}>
                <Swiper navigation={{
                    /*   nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev" */
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    freeMode={true}
                    modules={[Autoplay, Navigation, EffectCreative, Pagination]}
                    initialSlide={0}
                    spaceBetween={20}
                    autoplay={true}
                    centeredSlides={false}
                    className="mySwiper"
                    effect={'creative'}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [0, 0, -400],
                        },
                        next: {
                            translate: ['100%', 0, 0],
                        },
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        lastThreePublication.map((publication, p) => {
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
                {/*  <div id='nextBanner' className="swiper-button-next" />
                <div id='prevBanner' className="swiper-button-prev" /> */}
                <div ref={navigationNextRef} className="swiper-button-next nextBanner"></div>
                <div ref={navigationPrevRef} className=" swiper-button-prev prevBanner"></div>
            </div>


        </>
    )
}

export default Banner
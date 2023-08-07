import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Autoplay } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import banner from "../styles/banner.module.scss"
import Image from 'next/image';
import Button from '@mui/material/Button';


function Banner() {
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
                    <SwiperSlide className={banner.slide}>
                        <div className={banner.contentTextSlider} > 
                            <h1>UPGRADE YOUR SUNDAYS
                                <span></span>
                            </h1>
                            <p> offers up to -70% off the best luxury hotels every Sunday.</p>
                            <Button size="medium" type="submit" variant="contained" sx={{backgroundColor: "#ff3366"}} >
                                Ver mas
                            </Button>
                        </div>
                       <Image className={banner.img} src={"/assets/banner.png"} alt="asd" fill sizes="100vw" />
                    
                    </SwiperSlide>
                    <SwiperSlide className={banner.slide}>
                          <div className={banner.contentTextSlider} > 
                            <h1>golsadf <span></span></h1>
                            <p>Enjoy secret offers up to -70% off the best luxury hotels every Sunday.</p>
                        </div>
                        <Image className={banner.img} src={"/assets/illustration_login.png"} alt="asd" fill sizes="100vw" />
                    </SwiperSlide>
                   
                    <SwiperSlide className={banner.slide}>Slide 3</SwiperSlide>
                  

                </Swiper>
                <div className="swiper-button-next" />
                <div className="swiper-button-prev" />
            </div>


        </>
    )
}

export default Banner
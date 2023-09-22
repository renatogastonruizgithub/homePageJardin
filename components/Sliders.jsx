import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import SwiperCore from 'swiper';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Sliders = ({
    children, navegation,
    AutoplayDelay,
    slidesPerViewMobile,
    slidesPerViewTablet,
    slidesPerViewDesktop,
    centeredSlides
}) => {
    const swiperRef = useRef(null);
    const nextButtonRef = useRef(null);
    const prevButtonRef = useRef(null);
    const paginationRef = useRef(null);
    const swiperOptions = {
        breakpoints: {
            320: {
                slidesPerView: slidesPerViewMobile,
                spaceBetween: 10,
                centeredSlides: centeredSlides,
            },
            768: {
                slidesPerView: slidesPerViewTablet,
                spaceBetween: 10,

            },
            1024: {
                slidesPerView: slidesPerViewDesktop,
                spaceBetween: 20,
            },
            1440: {
                slidesPerView: slidesPerViewDesktop,
                spaceBetween: 20,
            },
        },
        navigation: {
            nextEl: nextButtonRef.current,
            prevEl: prevButtonRef.current,
        },
        pagination: {
            el: paginationRef.current,
            clickable: true,
        },
        autoplay: {
            delay: AutoplayDelay,
            disableOnInteraction: false,
        },
        /*  freeMode: true, */
        initialSlide: 0,
        /*   centeredSlides: centeredSlides, */
        slidesPerView: 'auto',
        onSlideChange: () => handleSlideChange(), // Llama a la función de SlideChange local
        onSwiper: (swiper) => swiperRef.current = swiper, // Guarda la instancia de Swiper en el ref
    };


    const handleSlideChange = () => {

    };

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.on('slideChange', handleSlideChange);
        }
    }, []);
    return (
        <div style={{ position: "relative" }}>
            <Swiper

                {...swiperOptions}
            >
                {
                    children
                }

            </Swiper>
            {
                navegation &&
                <>
                    <div ref={nextButtonRef} className="swiper-button-next" style={{ color: '#007aff' }} />
                    <div ref={prevButtonRef} className="swiper-button-prev" style={{ color: '#007aff' }} />
                </>


            }

            <div ref={paginationRef} className="swiper-pagination colorPagination" />
        </div>
    )
}

export default Sliders
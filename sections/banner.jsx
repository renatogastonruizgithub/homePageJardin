import React, { useCallback, useEffect, useRef, useState } from 'react'
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
import { Skeleton, Stack, Typography } from '@mui/material';
import 'swiper/css/effect-fade';
import { setOnePublicationRelevant } from '../features/homeSlice';
import ModalBanner from '../components/ModalBanner';


export const ViewNoticie = ({ title, biography }) => {
    return (
        <Stack direction="column" spacing={4} sx={{ padding: { xs: "1rem" } }}>
            <Typography variant='h4'>{title}</Typography>
            <Typography variant="body2">{biography}</Typography>
        </Stack>
    )
}


function Banner() {

    const { dataPublicationRelevant, onePublicationRelevant } = useSelector((state) => state.home)
    const dispatch = useDispatch()
    const navigationNextRef = useRef(null);
    const navigationPrevRef = useRef(null);

    const [open, setopen] = useState(false)

    const openModal = useCallback(() => {
        setopen(!open)
    }, [open])


    const viewNoticeModal = useCallback((title, biography) => {
        dispatch(setOnePublicationRelevant({ title, biography }))
        openModal();
    }, [dispatch, openModal])
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
                <Swiper
                    style={{
                        "--swiper-pagination-color": "#FFF",
                        "--swiper-pagination-bullet-size": "10px",
                    }}

                    navigation={{

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
                                        <Typography variant='body2' sx={{
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            width: "90%",
                                            textAlign: "center"
                                        }}>{publication.biography}</Typography>
                                        <Button onClick={() => viewNoticeModal(publication.title, publication.biography)} size="medium" type="submit" variant="contained" sx={{ backgroundColor: "#ff3366" }} >
                                            Ver mas
                                        </Button>
                                    </div>
                                    <Image priority={true} style={{ objectFit: "cover", width: "100%" }} className={banner.img} src={publication.imageUrl} alt="asd" fill sizes="100vw" />

                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>

                <div ref={navigationNextRef} className="swiper-button-next nextBanner"></div>
                <div ref={navigationPrevRef} className=" swiper-button-prev prevBanner"></div>
            </div>

            {open && (
                <ModalBanner
                    open={openModal}
                    onClosed={openModal}
                    data={<ViewNoticie title={onePublicationRelevant.title} biography={onePublicationRelevant.biography} />}
                />
            )}


        </>
    )
}

export default Banner
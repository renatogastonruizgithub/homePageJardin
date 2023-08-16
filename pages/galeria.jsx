import React, { useCallback, useEffect } from 'react'
import { LayuotSecondary } from '../layouts/secondaryPages/layuotSecondary'
import { Grid, CircularProgress, Stack, Pagination, Container, Box, ImageList, ImageListItem } from '@mui/material';
import geleria from "../styles/galeria.module.scss"
import { BannerLayouts } from '../sections/bannerLayouts'
import Lightbox from '../components/lightbox';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { changePage, loadingGallery, openGallery, setOneImage } from '../features/gallerySlice';
import { getGallery } from '../features/thunksGallery';

export default function Galeria() {

    const { data, totalPages, isOpen, oneImage, isLoading, currentPage } = useSelector((state) => state.gallery)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGallery());
    }, [currentPage]);


    const handleChanges = (e, value) => {
        dispatch(changePage(value - 1))
        dispatch(loadingGallery(!isLoading))

    };

    const swowImage = useCallback(() => {
        dispatch(openGallery(!isOpen));
    }, [dispatch, isOpen]);

    const viewImageModal = useCallback((url, description) => {
        dispatch(setOneImage({ url, description }));
        swowImage();
    }, [dispatch, swowImage]);





    return (
        <>
            <LayuotSecondary>
                <BannerLayouts title={"Galeria"} itemData={data}></BannerLayouts>
                <Box sx={{ marginTop: "5rem", marginBottom: "4rem" }}>
                    <Container maxWidth="lg">
                        <Grid container>
                            <Grid item xs={12}>
                                {
                                    isLoading ? (
                                        <Box sx={{ display: "grid", placeItems: "center" }}>
                                            <CircularProgress />
                                        </Box>
                                    ) : (<ImageList variant="masonry" sx={{
                                        columnCount: {
                                            xs: '1 !important',
                                            sm: '2 !important',
                                            md: '3 !important',
                                            lg: '4 !important',
                                            xl: '5 !important',
                                        },
                                    }} gap={12}>

                                        {data.map((itemdata, g) => (
                                            <ImageListItem className={geleria.imgGaleria} sx={{ position: "relative" }} key={g} >
                                                <Image src={itemdata.imageUrl}
                                                    alt={itemdata.alternative}
                                                    fill sizes="100vw"
                                                />
                                                <span onClick={() => viewImageModal(itemdata.imageUrl, itemdata.description)}>Ver</span>
                                            </ImageListItem>
                                        ))}
                                    </ImageList>
                                    )
                                }


                                <Stack sx={{ marginTop: "3rem", display: "grid", placeItems: "center" }}>
                                    <Pagination
                                        sx={{
                                            borderRadius: "10px",
                                            boxShadow: "inset 0 -3em 3em rgb(11 9 9 / 10%),0 0 0 2px rgba(4, 47, 101, 0),0.3em 0.3em 1em rgba(0, 0, 0, 0.3)"
                                        }}
                                        page={currentPage + 1}
                                        onChange={handleChanges}
                                        count={totalPages} shape="rounded" />
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Box >


                <Lightbox
                    src={oneImage.url}
                    open={isOpen}
                    onClosed={swowImage}
                    data={oneImage.description}
                />
            </LayuotSecondary>
        </>
    )
}

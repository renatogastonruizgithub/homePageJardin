import { Box } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image'
import lightbox from "../styles/viewImages.module.scss"

const Lightbox = ({ src, open, onClosed, data }) => {

    return (
        <>
            {
                open &&
                <Box sx={{
                    backgroundColor: "#000",
                    position: "fixed",
                    zIndex: "7000",
                    width: "100%",
                    height: "100vh",
                    display: "grid",
                    placeItems: "center",
                    top: 0,
                    left: 0,
                    overflowY: "hidden !important"
                }}
                    component="div">


                    <div className={lightbox.contentImg}>
                        <CloseIcon onClick={onClosed}
                            sx={{
                                color: "#fff",
                                cursor: "pointer",
                                position: "absolute",
                                right: "0",
                                top: "0",
                                zIndex: "7100",
                                fontSize: "2rem"
                            }}
                        />
                        <Image

                            placeholder="blur"
                            blurDataURL="/assets/loading.gif"
                            src={src}
                            alt="SDFsd"
                            fill
                            sizes="100vw" />
                        <span>{data}</span>
                    </div>
                </Box>
            }

        </>
    )
}

export default Lightbox
import Image from 'next/image'
import React, { useEffect } from 'react'
import banner from "../styles/bannerLayouts.module.scss"
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useRouter } from 'next/router';
import { Skeleton } from '@mui/material';


export const BannerLayouts = ({ title, itemData }) => {
    if (!itemData || !Array.isArray(itemData) || itemData.length === 0) {
        return <Skeleton animation="wave" variant="rectangular" width="100%" height="75vh" />
    }

    const lastImg = itemData[itemData.length - 1];
    const router = useRouter();
    const ir = () => {
        router.push("/")
    }


    return (
        <>
            <section className={banner.contenetBanner}>
                <div  >
                    <Breadcrumbs separator="›" color="#fff" sx={{ fontSize: "1.6rem", letterSpacing: "1px" }} aria-label="breadcrumb" >
                        <Link underline="hover" onClick={ir} sx={{ opacity: ".5" }} color="#fff" href="/">
                            Home
                        </Link>
                        <Link
                            sx={{ textDecoration: "none" }}
                            color="#fff"
                        >
                            {title}
                        </Link>
                    </Breadcrumbs>
                </div>
                <Image key={itemData.length - 1} alt='banner' src={lastImg.imageUrl} fill="100vw" />

            </section>
        </>
    )
}

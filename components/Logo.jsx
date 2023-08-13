import { Box, Skeleton, Stack } from '@mui/material'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCompany } from '../features/thunksHome'

const Logo = ({ color }) => {
    const { dataCompany } = useSelector((state) => state.home)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCompany())

    }, [])
    if (!dataCompany || !Array.isArray(dataCompany) || dataCompany.length === 0) {
        return <Skeleton animation="wave" variant="circular" width="50px" height="50px" />
    }
    return (
        <>

            {
                dataCompany.map((item, d) => {
                    return (
                        <Stack direction="row"
                            sx={{
                                display: { xs: 'flex', md: 'flex' },
                                alignItems: "center",
                                borderRadius: "50%",
                                height: "50px", width: "50px"
                            }}
                            key={d}
                        >

                            <Image
                                sizes='cover'
                                style={{ objectFit: "cover", borderRadius: "50%" }}
                                src={item.imageUrl} alt="logo jardin"
                                width={50}
                                height={50} />
                            <p style={{ marginLeft: "1rem", color: color }}>{item.name}</p>
                        </Stack>

                    )
                })
            }
        </>
    )
}

export default Logo
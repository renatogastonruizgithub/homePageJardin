import Head from 'next/head'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCompany } from '../features/thunksHome'

const MyHead = () => {

    const { dataCompany } = useSelector((state) => state.home)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCompany())

    }, [])
    if (!dataCompany || !Array.isArray(dataCompany) || dataCompany.length === 0) {
        return (
            <>
                <title>cargando...</title>

            </>

        )
    }

    return (
        <Head>


            {dataCompany.map((tag, i) => (
                <React.Fragment key={i}>
                    <title>{tag.name}</title>
                    <link type="image/png" rel="shortcut icon" href={tag.imageUrl.trim().replace(/^http:/, 'https:')} />
                    <meta name="description" content="Generated by create next app" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    {/*  <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;700&display=swap" rel="stylesheet" /> */}

                    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,200&family=Spectral:wght@600&display=swap" rel="stylesheet" />
                </React.Fragment>
            ))}




        </Head>
    )
}

export default MyHead
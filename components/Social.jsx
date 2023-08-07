import { IconButton, Skeleton, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useDispatch, useSelector } from 'react-redux';
import { getCompany } from '../features/thunksHome';

const Social = ({ color, xs }) => {
    const { dataCompany } = useSelector((state) => state.home)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCompany())
    }, [])
    if (!dataCompany || !Array.isArray(dataCompany) || dataCompany.length === 0) {
        return (
            <>
                <Stack direction="row" sx={{ display: { xs: 'none', md: 'flex' } }} spacing={2}>
                    <Skeleton animation="wave" variant="circular" width="30px" height="30px" />
                    <Skeleton animation="wave" variant="circular" width="30px" height="30px" />
                    <Skeleton animation="wave" variant="circular" width="30px" height="30px" />
                </Stack>

            </>

        )
    }
    return (
        <>
            {dataCompany.map((data, inde) => {
                return (
                    <div key={inde} >
                        <Stack direction="row" sx={{ display: { xs: xs, md: 'block' } }} spacing={2}>
                            <IconButton href={data.linkIg}>
                                <InstagramIcon sx={{ color: color }} ></InstagramIcon>
                            </IconButton>
                            <IconButton href={data.linkFb} target='_blank'>
                                <FacebookIcon sx={{ color: color }}  ></FacebookIcon>
                            </IconButton>
                            <IconButton href={`https://api.whatsapp.com/send?phone=${data.linkLk},%20&text=Hola! quiero mas informacion`}>
                                <WhatsAppIcon sx={{ color: color }} ></WhatsAppIcon>
                            </IconButton>
                        </Stack>
                    </div>

                )
            })
            }

        </>
    )
}

export default Social
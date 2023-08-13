import { Grid, Typography, Stack, CardMedia, Skeleton } from '@mui/material'
import { Container } from '@mui/system'
import React, { useEffect } from 'react'
import { LayuotSecondary } from '../layouts/secondaryPages/layuotSecondary'
import { BannerLayouts } from '../sections/bannerLayouts'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Titles } from '../components/titles';
import { useDispatch, useSelector } from 'react-redux'
import { getProject } from '../features/thunksHome'

const Projectos = () => {

    const { dataProject } = useSelector((state) => state.home)


    const firstObjectId = dataProject.length > 0 ? dataProject[0].id.toString() : "0";

    const [value, setValue] = React.useState(firstObjectId);

    React.useEffect(() => {
        if (dataProject.length > 0) {
            setValue(firstObjectId);
        }
        else {
            setValue("0");
        }
    }, [dataProject]);

    const handleChange = (event, value) => {
        setValue(value);
    };





    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProject())

    }, [])

    return (
        <>
            {
                dataProject ?
                    (
                        <LayuotSecondary>
                            <BannerLayouts title={"Proyectos"} itemData={dataProject}>
                            </BannerLayouts>

                            <Container maxWidth="lg">
                                <Grid container spacing={5}>
                                    <Grid item xs={12}>
                                        <Box sx={{ marginTop: "4rem" }}>
                                            <Titles colorTitle={"#000"}
                                                color={"#ff3366"}
                                                variant={"h4"}
                                                text="Nuestros proyectos"
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <Box sx={{ borderRadius: "8px", width: '100%', marginBottom: "5rem", typography: 'body1' }}>
                                            <TabContext value={value}>
                                                <Box sx={{}}>
                                                    <TabList sx={{ backgroundColor: "white" }} variant="scrollable" allowScrollButtonsMobile
                                                        scrollButtons="auto" onChange={handleChange} aria-label="lab API tabs example">

                                                        {
                                                            dataProject.map((tab, e) => {
                                                                return (

                                                                    <Tab

                                                                        key={e} wrapped label={tab.name} value={tab.id.toString()} />

                                                                )
                                                            })
                                                        }
                                                    </TabList>
                                                </Box>
                                                {
                                                    dataProject.map((panel, i) => {
                                                        return (

                                                            <TabPanel value={panel.id.toString()} key={i}>
                                                                <Grid container spacing={10} sx={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
                                                                    <Grid item xs={12} lg={6}>
                                                                        <Box sx={{ width: '100%', typography: 'body1' }}>
                                                                            <Stack spacing={2}>
                                                                                <Titles colorTitle={"#000"}
                                                                                    color={"#ff3366"}
                                                                                    variant={"h6"}
                                                                                    text={panel.name}
                                                                                />

                                                                                <Typography variant='body2'>{panel.biography}</Typography>
                                                                                <Typography variant='p' >Publicado el {panel.date_creation}</Typography>
                                                                            </Stack>

                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid item xs={12} lg={5} >
                                                                        <Box>
                                                                            <CardMedia component="img" className='imgGolbal'
                                                                                image={panel.imageUrl}
                                                                            />
                                                                        </Box>
                                                                    </Grid>
                                                                </Grid>
                                                            </TabPanel>

                                                        )
                                                    })
                                                }


                                            </TabContext>
                                        </Box>
                                    </Grid>

                                </Grid>
                            </Container>


                        </LayuotSecondary >

                    ) : (<Skeleton animation="wave" variant="rectangular" width="100%" height="300px" />)
            }

        </>
    )
}
export default Projectos
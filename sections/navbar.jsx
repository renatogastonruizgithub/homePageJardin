import React, { useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

import Button from '@mui/material/Button';
import props from 'prop-types';
import { Container } from '@mui/system';

import Link from 'next/link'
import navb from "../styles/nabvar.module.scss"
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Logo from '../components/Logo';
import Social from '../components/Social';


const Navbar = (props) => {
    const drawerWidth = 240;
    const navItems = [
        { title: 'Home', url: '/' },
        { title: 'Nosotros', url: '/#nosotros' },
        { title: 'Proyectos', url: '/proyectos' },
        { title: 'Noticias', url: '/noticias' },
        { title: 'Galeria', url: '/galeria' },
    ];

    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const [isTransparent, setIsTransparent] = useState(false);
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 570,

    });

    useEffect(() => {
        setIsTransparent(!trigger);
    }, [trigger]);



    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{
                height: '100vh',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <List>
                {
                    navItems.map((item, i) => {
                        return (

                            <ListItem key={i} disablePadding>
                                <ListItemButton sx={{ textAlign: 'center' }}>

                                    <Link className={navb.linkMobile} href={item.url}>{item.title} </Link>
                                </ListItemButton>
                            </ListItem>
                        )
                    })
                }


            </List>


            <Social color="#000" xs="block"></Social>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>

            <Container maxWidth="sm">
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar
                        position="fixed"
                        component="nav"
                        className={isTransparent ? `${navb.transparent}` : `${navb.white}`}

                    >
                        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <IconButton
                                color="#000"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { md: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Logo color={isTransparent ? "#fff" : "#000"}></Logo>


                            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                                {
                                    navItems.map((items, y) => {
                                        return (
                                            <Button key={y} sx={{ color: '#000', textTransform: "none", letterSpacing: "1px" }}>

                                                <Link className={navb.link} href={items.url}>{items.title} </Link>
                                            </Button>
                                        )
                                    })
                                }

                            </Box>

                            <Social color="#000" xs="none"></Social>

                        </Toolbar>
                    </AppBar>
                    <Box component="nav">
                        <Drawer
                            container={container}
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true,
                            }}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Box>
                </Box>
            </Container >

        </>
    )
};

export default Navbar
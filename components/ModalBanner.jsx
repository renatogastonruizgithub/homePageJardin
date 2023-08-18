import { Box, IconButton } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';


const ModalBanner = ({ src, open, onClosed, data }) => {
    return (
        <div>
            {open &&
                <AnimatePresence >
                    <motion.div
                        key={open}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}

                        mode="out-in"
                    >

                        <Box sx={{
                            backgroundColor: "#00000061",
                            position: "fixed",
                            zIndex: "7000",
                            width: "100%",
                            height: "100vh",
                            display: "grid",
                            placeItems: "center",
                            top: 0,
                            left: 0,
                            overflow: "auto"
                        }}
                            component="div">

                            <Box sx={{
                                zIndex: "7100",
                                backgroundColor: "#fff",
                                position: "relative",
                                opacity: "1",
                                width: { xs: "90%", md: "60%", lg: "60%" },
                                borderRadius: "3px",
                                padding: "1rem",

                            }}>
                                <IconButton onClick={onClosed} sx={{
                                    cursor: "pointer",
                                    position: "absolute",
                                    right: "10px",
                                    top: "10px",
                                    zIndex: "7100",
                                    fontSize: "2rem",
                                    color: "#000"
                                }}>
                                    <CloseIcon />
                                </IconButton>
                                {data}
                            </Box>
                        </Box>
                    </motion.div>
                </AnimatePresence>

            }
        </div>
    )
}

export default ModalBanner
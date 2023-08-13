import React from 'react'
import { Box, IconButton } from '@mui/material';
import Modal from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import Fade from '@mui/material/Fade';
const Modals = React.memo(({ open, handleClose, form, maxWidth }) => {
    return (
        <>

            <Modal
                maxWidth={maxWidth}
                fullWidth
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{ zIndex: 2050, backgroundColor: "none" }}
            >

                <Box sx={{
                    padding: { xs: "1rem", md: "3rem" },
                    paddingTop: { xs: "2rem" },
                    position: "relative"
                }}>

                    {form}

                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        position: "absolute",
                        right: ".2rem",
                        top: ".1rem"
                    }}>

                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </Box>

            </Modal>

        </>
    )
});

export default Modals;
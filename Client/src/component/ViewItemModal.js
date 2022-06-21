import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SwipeableTextMobileStepper from "./ModalCrousel"
import ModalDescription from './ModalDescription';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "90%",
    display: "flex",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    height: "80%",
};

export default function TransitionsModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = (e) => {
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    return (
        <div style={{ width: "100%", marginLeft: "8px" }} >
            <Button size="small" onClick={handleOpen} style={
                {
                    width: "100%%"
                }

            }><ShoppingCartIcon /></Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2" width="60%">
                            <SwipeableTextMobileStepper />
                        </Typography>
                        <ModalDescription />
                    </Box>
                </Fade>
            </Modal>
        </div >
    );
}

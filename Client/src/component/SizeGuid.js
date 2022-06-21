
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import SwipeableTextMobileStepper from "./ModalCrousel"
import ModalDescription from './ModalDescription';

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

export default function SizeGuid() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = (e) => {
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button size="small" onClick={handleOpen} sx={
                {
                    mt: 3,
                    margin: "20px",
                    minWidth: "86px !important",
                    maxWidth: "86px !important",
                    display: "flex",
                    justifyContent: "center",
                    alignItem: "center",
                    padding: "5px !important"
                }
            }
            >

                <Typography variant="p" component="p">
                    Size Guid
                </Typography>
            </Button>
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
                        <Typography id="transition-modal-title" variant="img" src=' https://www.shahzebsaeed.com/wp-content/uploads/2021/03/basic-5-pocket-Size-guide-1024x560.jpg' component="img" width="100%" height="100%">
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div >
    );
}








// https://www.shahzebsaeed.com/wp-content/uploads/2021/03/basic-5-pocket-Size-guide-1024x560.jpg
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Uploadimg from './UploadImages';
import { Form } from 'antd';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "37%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    paddingBottom: "3px",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
};



export default function EditeProductModal(props) {
    const [open, setOpen] = React.useState(false);
    const [check, setCheck] = React.useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { id, links } = props
    console.log(check)
    const sub = (e) => {
        e.perventDefault()
        
    }
    return (
        <div style={{
            display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", width: "65px", boxShadow: "0px 0px 3px 1px grey", backgroundColor: "#5e5e5e59",
            position: "absolute",
            top: "6px",
            right: "6px",

        }}>
            <Button onClick={handleOpen}><EditOutlinedIcon /></Button>
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
                        <legend>
                            Edit product
                        </legend>
                        <Typography id="transition-modal-title" variant="h6" component="h2" width="100%">
                            <label>Name</label>
                            <input type="text" style={{ width: "100%", }} />
                            <span style={{ fontSize: "12px" }}>if you do not want to update Name leave the box empty.</span>
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2, width: "100%", }}>
                            <label>Price</label>
                            <input type="Number" style={{ width: "100%", }} />
                            <span style={{ fontSize: "12px" }}>if you do not want to update Price leave the box empty</span>

                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2, width: "100%", }}>
                            <Uploadimg />
                            <label style={{ padding: "3px" }}>
                                <span style={{ fontSize: "12px" }}>do you want update images to.</span>
                                <input type="checkbox" onChange={(e) => { setCheck(e.target.checked) }} />
                            </label>
                        </Typography>
                        <Form.Item style={{ marginLeft: "auto", backgroundColor: "black", color: "white", margin: "10px 0px 20px auto", padding: "5px", borderRadius: "4px" }}>
                            <Button type="primary" onClick={sub} style={{ color: "white", }}>Submit</Button>
                        </Form.Item>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

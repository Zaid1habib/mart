import React from 'react'
import Typography from '@mui/material/Typography';
import BasicSelect from './SizeSelector';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { scrollbarStyle } from '../Constants';
import GroupedButtons from './Counter';
import SizeGuid from './SizeGuid';
const ModalDescription = () => {

    return (
        <Typography id="transition-modal-description" sx={scrollbarStyle} width="40%" padding="20px" >
            <Typography variant="h5" component="h6" >
                Steel Grey Self Formal Dress Trouser (WTR-284)
            </Typography>;
            <Typography variant="p" component="p" color="gray">
                <span style={{ fontWeight: "bold" }} > Rs</span> 3000
            </Typography>;
            <Typography variant="ul" component="ul" paddingLeft="10px ">
                <Typography variant="li" component="li">
                    this is paragraph
                </Typography>
                <Typography variant="li" component="li">
                    this is paragraph
                </Typography>
                <Typography variant="li" component="li">
                    this is paragraph
                </Typography>
                <Typography variant="li" component="li">
                    this is paragraph
                </Typography>
                <Typography variant="li" component="li">
                    this is paragraph
                </Typography>
                <Typography variant="li" component="li">
                    this is paragraph
                </Typography>
                <Typography variant="li" component="li">
                    this is paragraph
                </Typography>
            </Typography>;
            <Typography variant="p" component="p">
                Free Delivery, 30 Days Exchange Policy
                <br />
                021-83716284  l  0345-8549831
            </Typography>
            <Typography variant="div" component="div">
                <Typography variant="h5" component="h5" sx={{ mt: 3 }}>
                    Add shirts, please Click here
                </Typography>
                <Typography variant="p" component="p" sx={{ mt: 1 }}>
                    Size :
                </Typography>
                <BasicSelect />
                <SizeGuid />
                <br />
                <br />
                <GroupedButtons />
                <Typography sx={{ m: 3, padding: "7px", borderRadius: "1px", border: "none", color: "white", backgroundColor: "red", width: "100px" }} component="button">
                    Add Cart
                </Typography>
                <br />
            </Typography>
            <hr />
            <>
                <Typography variant="p" component="p" sx={{ mt: 3 }}>
                    <span style={{ fontWeight: "bold", }}>SKU:</span>  BFP-22
                </Typography>
                <Typography variant="p" component="p" sx={{ mt: 1 }}>
                    <span style={{ fontWeight: "bold", }}>Category:</span> Basic 5 Pockets
                </Typography>
                <Typography variant="p" component="p" sx={{ mt: 1 }}>
                    <span style={{ fontWeight: "bold", }}>Share:</span>
                </Typography>
            </>
        </Typography>
    )
}

export default ModalDescription
import { Divider, Typography } from 'antd';
import React from 'react'
import AddProductForm from './AddProductForm';
import gif from "../imgs/36605-shopping-cart.gif";
import { Link } from '@mui/material';
const AddProduct = () => {
    return (
        <div>


            <Typography variant="div" component="div" style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
            }} id="Add-product">
                {/* <img src={gif} style={{ width: "55%" }} /> */}
                <AddProductForm />
            </Typography>

        </div>
    )
}

export default AddProduct
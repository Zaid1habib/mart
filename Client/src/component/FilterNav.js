import React from 'react'
import { ArrowLeftOutlined } from '@ant-design/icons'
import MinimumDistanceSlider from "./RangSlider"
import Gridviewicon from './Grid-view-icon'
import { Typography } from '@mui/material'
const FilterNav = (props) => {
    const { name, subCate } = props
    return (
        <Typography style={{
            display:"flex",
            alignItems: "center !important",
            flexDirection: "row",
            position:"relative !important"
        }}
            sx={{alignItems:"center",
            position:"relative"}}
            variant="nav"
            component="nav"
            className='filternav'
        >

            <h1 style={{ display: "inline-block", width: "20%", textAlign: "center" , margin:"0px 0px 25px 0px"}}>
                <ArrowLeftOutlined className='Collection-back-btn' onClick={() => { window.location.replace("/") }} title="This will take you to the home page" />
                {name}
                {subCate !== undefined ? " / " + subCate : ""}
            </h1>
            <div style={{display:"flex", width:"100%", justifyContent:"flex-end"}}>
            <MinimumDistanceSlider />
            <Gridviewicon />
            </div>
        </Typography >
    )
}

export default FilterNav
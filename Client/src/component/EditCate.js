import React, { useState } from 'react'
import EditCateModal from './EditCateModal';
import { Select } from 'antd';
import Typography from '@mui/material/Typography';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import { useSelector } from 'react-redux';

const EditCate = (props) => {
    const { Option } = Select;
    const [showIcon, setShowIcon] = useState(false)
    const { paraicon } = props
    // const [Category, setCategory] = useState("")
    const [maincate, setMaincate] = useState(false)
    const [id, setId] = useState()
    const MainCate = useSelector(state => state.MainCategory.findMainCate)
    const SubCate = useSelector(state => state.MainCategory.findSubCate)
    console.log(maincate , " this is a main cate")
    const onChange = (value, e) => {
        // console.log(`selected ${value}`);
        if(value === undefined){
            console.log(value === undefined)
            setId(undefined)
        }
        else if (value !== undefined) {
            if(e.key === null){
                setMaincate(true)
            }else{
                setMaincate(false)
            }
            setShowIcon(true)
            // setCategory(value)
            setId(e.id)
            console.log(id)
        }
    };
    // setId(23)

    const onSearch = (value) => {
        console.log('search:', value);
    };

    return (
        <Typography paragraph style={{ padding: "10px 0px ", height: (paraicon === true) ? "200px" : "auto", width: (paraicon === true) ? "" : "100%", margin: (paraicon === false) ? "0px" : "" }}>
            <div style={{ display: "flex", width: (paraicon === true) ? "" : "100%", }}>
                <Select
                    showSearch
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={onChange}
                    filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                    onSearch={onSearch}
                    allowClear
                    // onClick={()=>{setShowIcon(false)}}
                    style={{ width: (paraicon === true) ? "80%" : "100%", }}
                >
                    {Array.isArray(SubCate) && SubCate.map((data, index) => {
                        return (
                            <>
                                <Option value={data.categoryName} key={index} id={data?._id} onClick={()=>{setMaincate(false)}}><p>{data.categoryName}</p><span style={{ marginLeft: "auto", color: "gray" }}>{data.categoryOf}</span> </Option>
                                {(paraicon === true) ?
                                    MainCate[index]?.categoryName === undefined ?
                                        console.log("empty") :
                                        <Option value={MainCate[index]?.categoryName} id={MainCate[index]?._id} onClick={()=>{setMaincate(true)}}>
                                            <p>{MainCate[index]?.categoryName}</p>
                                            <span style={{ marginLeft: "auto", color: "gray" }} >MainCategory</span> 
                                        </Option>
                                    : console.log(false)}

                            </>
                        )
                    })
                    }
                </Select>
                {paraicon && <EditCateModal id={id} maincate={maincate}/>}
            </div>
            {paraicon && <p style={{
                padding: "4px 0px",
                color: "#b0aeae",
            }}>Select Category want to edit then click edit <EditTwoToneIcon style={{ height: "18px", }} /> button to edit.</p>}
        </Typography>)
}

export default EditCate
import React, { useState } from 'react'
import Uploadimg from "./UploadImages"
import { Button, Input, InputNumber, Space, Typography } from 'antd';
import "../css/Addproduct.css"
import Textarea from './Textarea';
import { useSelector } from 'react-redux';
import EditCate from './EditCate';
const AddProductForm = () => {
    const [Category, setCategory] = useState("")
    const [Collection, setCollection] = useState("")
    const [textareaValue, setValue] = useState('');
    const [ProductName, setProductName] = useState('');
    const [Price, setPrice] = useState(1000)
    const paraicon = false
    const images = useSelector(state => state.UploadProfileImg)
    // const MainCate = useSelector(state => state.MainCategory)

    let arr = [];
    const onChange = (value) => {
        console.log('changed', value);
        setPrice(value)

    };
    const sub = async (e) => {
        e.preventDefault()
        if (images !== undefined) {
            console.log("yup true")
            images.map((data) => {
                arr.push(data.thumbUrl)
            })
        }
        console.log(arr, " this is arr")
        if (arr !== []) {
            const res = await fetch("http://localhost:5000/Add-Product-Collection/Addproduct", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${localStorage.getItem("token")}`

                },
                body: JSON.stringify(
                    {
                        category: Category,
                        collectionName: Collection,
                        description: textareaValue,
                        price: Price,
                        productName: ProductName,
                        images: arr
                    }
                )
            })
            const result = await res.json()
            if (result) {
                arr = []
                console.log(arr)
            }
            console.log(result, "this is result")
        }
    }


    return (
        <form className="add-prod-form">
            <label className='lb-product'>
                Category
            </label>
            {/* <Input placeholder="Basic usage" onChange={(e) => { setCategory(e.target.value) }} /> */}
            <EditCate paraicon={paraicon} setCategory={setCategory} />
            <p style={{ color: "#a7a7a7", fontSize: "12px" }}>Select Category in which you want to add this product</p>
            <label className='lb-product'>
                Collection Name
            </label>
            <Input placeholder="Basic usage" onChange={(e) => { setCollection(e.target.value) }} />
            <p style={{ color: "#a7a7a7", fontSize: "12px" }}>Select Collection for your new product.</p>
            <label className='lb-product'>
                Product Name
            </label>
            <Input placeholder="Basic usage" onChange={(e) => { setProductName(e.target.value) }} />
            <p style={{ color: "#a7a7a7", fontSize: "12px" }}>Your new product name</p>
            <label className='lb-product'>
                Price
            </label>
            <Space style={{ width: "100%" }}>
                <InputNumber
                    defaultValue={1000}
                    formatter={(value) => `Rs ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                    onChange={(value)=>{setPrice(value)}}
                    style={{ width: "100%" }}
                />
            </Space>
            <p style={{ color: "#a7a7a7", fontSize: "12px" }}>Your new product price</p>
            <label className='lb-product'>
                Image
            </label>
            <Uploadimg />
            <p style={{ color: "#a7a7a7", fontSize: "12px" }}>Upload image's for your new product</p>
            <label className='lb-product'>
                Description
            </label>
            <Textarea value={textareaValue} setValue={setValue} />
            <p style={{ color: "#a7a7a7", fontSize: "12px" }}>Add some info for your product example {"{size you have for this product , color you have for this product , .... }"}</p>
            <div className='sub-btn-prd-div'>
                {/* <input type="submit" className='sub-btn-prd' onClick={sub} /> */}
                <Button type="primary" htmlType="submit" className='sub-btn-prd' onClick={sub}>
                    Submit
                </Button>
            </div>
        </form>
    )
}

export default AddProductForm
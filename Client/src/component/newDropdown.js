import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const NewDropdown = () => {
    const [subcat, setSubcat] = useState("")
    const [collectionName, setCollectionName] = useState("")
    const [pagex, setPageX] = useState("")
    const [pagey, setPageY] = useState("")
    const [NewsubCate, setNewsubCate] = useState("")
    const [dropVisible, setdropVisible] = useState(false)
    const Category = useSelector(state => state.MainCategory)
    console.log(pagex)
    const newSub = (e) => {
        setNewsubCate(e.target.innerText)
        setdropVisible(false)
    }
    const onMouseOver = (e) => {
        setPageX(e.pageX + "px")
        setPageY(e.pageY + "px")
        setCollectionName(e.target.innerText)
    }
    useEffect(() => {
        const subcates = Category.findSubCate.map((data) => {
            if (data.categoryOf === collectionName) {
                console.log(data.categoryOf)
                if (data.categoryName !== undefined) {
                    return <li onClick={newSub} style={{ padding: "10px", borderRadius: "3px" }} onClick={(e)=>{setNewsubCate(e.target.innerText)}}><Link to={`/Collections/${collectionName}/${data.categoryName}`}> {data.categoryName} </Link></li>

                }
                //    console.log([subcate].length)
            }
        })
        Promise.all(subcates).then((values) => {
            console.log(values)
            setSubcat(values)
        });
    }, [collectionName])
    const onMouseOut = (e) => {

        setSubcat("")
    }
    return (
        <div>
            {/* {NewsubCate}{(NewsubCate || collectionName)?"": */}
            <p onClick={()=>setdropVisible(true)}>All Category</p>
            {<ul style={{
                padding: " 0px",
                boxShadow: "#cdcdd5 0px 1px 4px",
                borderRadius: "2px",
                width: "155px",
                margin: "20px",
                display:(dropVisible === true)?"block":"none"
            }}>{Category.findMainCate && Category.findMainCate.map((data) => {
                return (
                    <>
                        <li onMouseOver={onMouseOver} style={{ padding: "5px 10px", borderBottom: "1px solid #d3cdcd52", }} onClick={()=>{setdropVisible(false)}}>{data.categoryName}</li>
                    </>
                )
            })
                }
            </ul>}


            <ul style={{
                padding: " 0px",
                boxShadow: "#cdcdd5 0px 1px 4px",
                borderRadius: "2px",
                width: "155px",
                margin: "20px",
                position: "absolute",
                top: `${pagey}`,
                left:`27%`
            }}>
            {subcat}
        </ul>


        </div >
    )
}

export default NewDropdown
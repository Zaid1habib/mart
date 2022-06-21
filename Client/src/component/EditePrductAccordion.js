import React, { useState } from 'react'
import MediaCard from './Card'
import { Input } from 'antd';
import { useSelector } from 'react-redux';
const EditePrductAccordion = () => {
    const { Search } = Input;
    const { loader, setLoader } = useState(false)
    
    const Product = useSelector(state => state.Products)
    return (
        <div>
            <Search placeholder="input search text" enterButton="Search" size="large" loading={loader} style={{ marginBottom: "10px", }} />
            {Product && Product.map((data, index) => {
                console.log(data.images)
            return (
              // <Link to={`/ViewItem`}>
              <MediaCard links={data.images} data={data} index={index} />
              // </Link>
            )
          })}
        </div>
    )
}


export default EditePrductAccordion
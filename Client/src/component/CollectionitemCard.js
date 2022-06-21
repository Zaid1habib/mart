import * as React from 'react';
import '../css/CollectionitemCard.css'
import Box from '@mui/material/Box';
import arr from "../data"
import Gridviewicon from './Grid-view-icon';
import { useSelector } from 'react-redux';
import Card from "./Card"
import { Link } from 'react-router-dom';


export default function CSSGrid( props) {
  const Sort = useSelector(state => state.Grid)
  const {name , subCate , Collection} = props
  const products = useSelector(state => state.Products)
  console.log(products)
  return (
    <>
    {

    
      <Box sx={{ width: "100%", }}>
        <Box
          display="flex"
          flexWrap="wrap"
          gap={0}
          rowGap={10}
          padding="0px 0px 0px 60px"
          alignItems="start"
          justifyItems="center"
        >

          {products && products.map((data, index) => {
            if(data.category === Collection && data.collectionName === name){
            return (
                <Card links={data.images} data={data} index={index} />
                )
              }
          })}
        </Box>
      </Box>
}
    </>
  );
}

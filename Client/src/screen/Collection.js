import React from 'react'
import Nav from "../component/nav"
import { useParams } from 'react-router-dom'
import "../css/collection.css"
import CollectionitemCard from '../component/CollectionitemCard'
import FilterNav from '../component/FilterNav'
const Collection = () => {
  let { subCate, name } = useParams()
  console.log(name,subCate , "subcate")
  return (
    <div >
      <Nav />
      <br />
      <br />
      <br />
      <br />
      <br />
        <FilterNav name={name} subCate={subCate}/>

      <CollectionitemCard name={name} Collection={subCate}/>
    </div>
  )
}

export default Collection
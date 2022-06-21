import React, { useEffect } from 'react'
import Footer from '../component/footer'
import HomeCollection from '../component/HomeCollection'
import Nav from '../component/nav'
import Offers from '../component/Offers'
import Reviews from '../component/Reviews'
import Shoppingcart from '../component/Shoppingcart'
import Template from '../component/template'
import { useDispatch } from 'react-redux'
import { MainCategory } from "../state/actions/MainCateAction"
import { UserNavinfo } from '../state/actions/userNavInfoAction'
import { useSelector } from 'react-redux';
import {products} from "../state/actions/productAction"

const Home = () => {
    // const dispatch = useDispatch()
    // console.log("DISPATCH=>",dispatch)
    // useEffect(async () => {
    //     console.log(localStorage.getItem("token"))
    //     const Avatar = localStorage.getItem("Avatar")
    //     const firstname = localStorage.getItem("firstName")
    //     const lastName = localStorage.getItem("lastName")
    //     const role = localStorage.getItem("role")
    //     dispatch(UserNavinfo(Avatar, firstname, lastName, role))

    //     // get catefory
    //     const res = await fetch("http://localhost:5000/AddCate-EditeCate/Category", {
    //         method: 'GET',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //             "Authorization": `Bearer ${localStorage.getItem("token")}`
    //         },
    //     })
    //     const result = await res.json()
    //     // if(!result.error){
    //     dispatch(MainCategory(result))

    //     //get Product
    //     const productRes = await fetch("http://localhost:5000/Add-Product-Collection/Products", {
    //         method: 'GET',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //             "Authorization": `Bearer ${localStorage.getItem("token")}`

    //         },
    //     })
    //     const productResult = await productRes.json()
    //     console.log(productResult , "productResult")
    //     dispatch(products(productResult))
    // }, [])


    return (
        <>
            <Nav />
            <br />
            <br />
            <br />
            <Offers />
            <HomeCollection />
            <Template />
            <br />
            <br />
            <br />
            <Reviews />
            <br />
            <br />
            <Footer />
        </>
    )
}

export default Home
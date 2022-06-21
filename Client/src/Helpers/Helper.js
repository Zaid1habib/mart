import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { MainCategory } from "../state/actions/MainCateAction"
import { UserNavinfo } from '../state/actions/userNavInfoAction'
import { products } from "../state/actions/productAction"
const Helper = () => {
    // const dispatch = useDispatch()
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
    //     console.log(result)
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
    //     console.log(productResult, "productResult")
    //     dispatch(products(productResult))
    // }, [])
    console.log('hello')
}

// Helper()

export default Helper
import { Link } from '@mui/material'
import React, { useState , useEffect } from 'react'
import GoogleSign from '../component/GoogleSign'
import { Input, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { MainCategory } from '../state/actions/MainCateAction';
import "../css/Login.css"
const Login = () => {
    const navigate = useNavigate()
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const dispatch  = useDispatch()
    console.log(email, password)
    const sub = async (e) => {
        e.preventDefault()
        const res = await fetch("http://localhost:5000/Auth/Login", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    email: email,
                    password: password
                }
            )
        })
        const result = await res.json()
        console.log("token")
        if (result.token) {
            localStorage.setItem("token", result.token)
            localStorage.setItem("firstName", result.firstName)
            localStorage.setItem("lastName", result.lastName)
            localStorage.setItem("Avatar", result.Avatar)
            localStorage.setItem("role", result.role)
            navigate("/", { replace: true })
        }
    }
    useEffect(async ()=>{
        const res = await fetch("http://localhost:5000/AddCate-EditeCate/Category", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
        })
        const result = await res.json()
        // if(!result.error){
            dispatch(MainCategory(result))
    },[])
    const state = useSelector(state => state)
    console.log(state)
    return (
        <div className='Login-body'>
            <form className='Login-Form'>
                <div className="form-group">
                    <h2>Login</h2>
                    <br />
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => { setemail(e.target.value) }} required />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group" >
                    <Space direction="vertical" style={{ width: "100% !important" }}>
                        <Input.Password placeholder="input password" onChange={(e) => { setpassword(e.target.value) }} required />
                    </Space>
                </div>
                <br />
                <center><Link to="/SignUp" id="emailHelp" className="form-text text-muted">! don't have an account</Link></center>
                <div className='Login-btns'>
                    <input type="submit" className="btn btn-primary login-btn" onClick={sub} value="Login" />
                    <GoogleSign />
                </div>

            </form>
        </div>
    )
}

export default Login

import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import "../css/Signup.css"
import { Typography } from 'antd';
import Uploadimg from '../component/UploadImages';
import { useNavigate } from "react-router-dom";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { useSelector } from "react-redux"
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '300px',
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
        },
    },
}));
const antIcon = (
    <LoadingOutlined
        style={{
            fontSize: 24,
        }}
        spin
    />
);

const SignUp = () => {
    //
    const classes = useStyles();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const ProfileImg = useSelector(state => state.UploadProfileImg)
    const [url , setUrl] = useState("")
    const navigate = useNavigate()

    //

    const handleSubmit = e => {
        e.preventDefault();
        // handleClose();
        console.log(ProfileImg, 'poroo')
        if (ProfileImg !== undefined) {
            console.log("yup true")
            console.log(ProfileImg[0]?.thumbUrl, "this  is profile image  react redux")
        }
    };

    const signup = async () => {
        const res = await fetch("http://localhost:5000/Auth/SIGNUP", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password,
                    image: ProfileImg[0]?.thumbUrl,
                    role:"Client"
                }
            )
        })
        const result = await res.json()
        if (result.success === "Your account has been successfully created" ) {
            setUrl(result.success)
            navigate("/Login", { replace: true })
        }
    }


    return (
        <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
        }}>
            <form className={classes.root} onSubmit={handleSubmit} style={{
                width: "35%",
                padding: "10px",
                alignItems: "flex-start",
                boxShadow: "#c2c2c2 0px 0px 7px 1px",
            }}>
                <Typography variant="h3" component="h3" style={{ padding: "11px" }}> Sign Up</Typography>
                <TextField
                    label="First Name"
                    variant="filled"
                    required
                    className='fileds'
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <TextField
                    label="Last Name"
                    variant="filled"
                    required
                    className='fileds'
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <TextField
                    label="Email"
                    variant="filled"
                    type="email"
                    required
                    className='fileds'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    label="Password"
                    variant="filled"
                    type="password"
                    required
                    className='fileds'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <div style={{ margin: "10px", }}>
                    <Uploadimg />
                </div>
                <div style={{
                    display: "flex", padding: "10px", flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    flexWrap: "wrap",
                    width: "100%"
                }}>
                    <Button type="submit" style={{ padding: "10px  !important", width: "100%", backgroundColor: "white !important", }} variant="contained" color="primary" className="sign-btn" onClick={signup}
                    >
                        <Spin indicator={antIcon} style={{ color: "black" }} /><span style={{ margin: "0px auto 0px 81px", }}> Signup</span>
                    </Button>
                    <Link to="/Login" variant="contained" color="primary" style={{ width: "100%", textAlign: "center", }} >
                        Already have an account Login
                    </Link>
                </div>
            </form >
            <img src={url}/>
        </div >
    );
};

export default SignUp;
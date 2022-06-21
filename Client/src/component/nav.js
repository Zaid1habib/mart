import React, { useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom"
import '../css/Navbar.css';
import Dropdowns from "../component/Dropdown"
import Shoppingcart from './Shoppingcart';
import { useSelector } from 'react-redux';
import ProfileModal from './ProfileModal';
import NewDropdown from './newDropdown';
const Nav = () => {
    const [visible, setvisible] = useState(false)
    const [visibleProfile, setvisibleProfile] = useState(false)
    const state = useSelector(state => state.userNavInfo)


    const AddToCart = (e) => {
        setvisible(true)

    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light " style={{ display: "flex", alignItems: "center !important" }}>
                <Link className="navbar-brand a" to="#">Shopping</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <NewDropdown />
                    <form className='search-form'>
                        <input type="search" name="search" className='search' required />
                        {/* <SearchOutlined /> */}
                        <p className='cart-icon' onClick={AddToCart}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16" id='icon'>
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                        </p>
                    </form>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "300px", }}>
                        {(localStorage.getItem("token") !== null) ?
                        <>
                            <div onClick={() => { setvisibleProfile(true) }} className="profile">
                                
                                <img src={state.Avatar} style={{
                                    width: "30px",
                                    height: "30px",
                                    borderRadius: "50px",
                                    objectFit: "cover"
                                }} />
                                <p style={{
                                    display: "flex",
                                    margin: "0px",
                                    height: "100%",
                                    padding: "0px 24px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width:"100%",
                                }}>
                                    {state.FirstName + " " + state.LastName}
                                </p>
                            </div> 
                                <ProfileModal visible={visibleProfile} setVisible={()=>setvisibleProfile(false)} /></>:
                            <>
                                <Link className='Login-btn' to="/Login">Login</Link>
                                <Link className='SignUp-btn' to="/SignUp">Sign up</Link>
                            </>
                        }
                    </div>
                </div>
            </nav >
            <Shoppingcart visible={visible} setvisible={setvisible} />
        </div >
    )
}

export default Nav
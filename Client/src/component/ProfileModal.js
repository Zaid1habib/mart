import { Button } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import "../css/ProfileModal.css"
const ProfileModal = (Props) => {
    let { visible, setVisible } = Props
    const state = useSelector(state => state.userNavInfo)

    return (
        <>
            <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }} className={visible === true ? ' visible profilemodal' : "hidden profilemodal"}>
                <div className='profile-avatar-name'>
                    <img src={state.Avatar} className="profile-Modal-image" />
                    <p style={{ padding: "10px" }}>{state.FirstName + " " + state.LastName}</p>
                </div>
                <hr style={{
                    width: "96%",
                    backgroundColor: "#b6b3b32e",
                    opacity: 0.2,
                }} />
                <div className='profile-modal-button'>
                <Button style={{margin:"10px 0px",backgroundColor:"black",color:"white", borderRadius:"4px"}}>Setting</Button>
                <Button style={{marginBottom:"10px",backgroundColor:"black",color:"white", borderRadius:"4px"}} onClick={()=>{["Avatar", "firstName", "lastName","token","role"].forEach((data)=>{localStorage.removeItem(data)}) ; window.location.reload()}}>Logout</Button>
                </div>
            </div>
            <div className={visible === true ? ' visible profileBack' : "hidden profileBack"} onClick={setVisible} >

            </div>
        </>
    )

}

export default ProfileModal
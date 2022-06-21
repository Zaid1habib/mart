export const UploadProfileImg = (file) =>{
    console.log(file , "file from action")
    return(dispatch)=>{
        dispatch({
            type:"UploadProfileImg",
            payload:file
        })
    }
}
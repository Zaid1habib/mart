export const MainCategory = (category) =>{
    // console.log("category action payload", category)
    return(dispatch)=>{
        dispatch({
            type:"MainCategory",
            payload:category
        })
    }
}
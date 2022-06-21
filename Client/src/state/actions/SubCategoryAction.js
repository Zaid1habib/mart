export const SubCategory = (category) =>{
    return(dispatch)=>{
        dispatch({
            type:"SubCate",
            payload:category
        })
    }
}
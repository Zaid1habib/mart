export const products = (product) =>{
    return(dispatch)=>{
        dispatch({
            type:"PRODUCT",
            payload:product
        })
    }
}
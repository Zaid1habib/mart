export const sort = (number) =>{
    return(dispatch)=>{
        dispatch({
            type:"SORT",
            payload:number
        })
    }
}
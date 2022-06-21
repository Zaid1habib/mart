export const UserNavinfo = (Avatar, FirstName, LastName ,role) => {
    
    return (dispatch) => {
        dispatch({
            type: "USERNAVINFO",
            payload: {Avatar:Avatar, FirstName:FirstName,LastName:LastName ,role:role}
        })
    }
} 
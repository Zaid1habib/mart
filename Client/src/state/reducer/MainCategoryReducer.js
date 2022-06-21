
const reducer = (state = "", action) => {
    if (action.type === "MainCategory") {
        return state= action.payload  
    } else {
        return state
    }
}

export default reducer
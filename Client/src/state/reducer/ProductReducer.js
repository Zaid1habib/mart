
const reducer = (state = "", action) => {
    // console.log(action.payload , "this is action.payload")
    if (action.type === "PRODUCT") {
        return state = action.payload 
    } else {
        return state
    }
}

export default reducer
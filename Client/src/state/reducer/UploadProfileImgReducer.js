
const reducer = (state = "", action) => {
    // console.log(action.payload , "this is action.payload")
    if (action.type === "UploadProfileImg") {
        return state = (action.payload === [] || action.payload === undefined) ? "" : action.payload
    } else {
        return state
    }
}

export default reducer
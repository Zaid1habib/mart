
const reducer = (state = [1, "25% 25% 25% 25% "], action) => {
    if (action.type === "SORT") {
        return state = [action.payload, (action.payload === 1) ? "25% 25% 25% 25%" : (action.payload === 3)?"40% 40% ":"33% 33% 33%"]
    } else {
        return state
    }
}

export default reducer
import { combineReducers } from "redux"
import  UploadProfileImg  from "./UploadProfileImgReducer"
import GridviewReducer from "./GridviewReducer"
import userNavInfoReducer from "./userNavInfoReducer"
import MainCategoryReducer from "./MainCategoryReducer"
import ProductReducer from "./ProductReducer"
const reducer = combineReducers({
    Grid: GridviewReducer,
    UploadProfileImg:UploadProfileImg ,
    userNavInfo:userNavInfoReducer,
    MainCategory:MainCategoryReducer,
    Products:ProductReducer
})

export default reducer
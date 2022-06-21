import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import reducers from "./reducer/index"
import {persistReducer , persistStore} from "redux-persist"
import storage from "redux-persist/lib/storage"
const presistConfig = {
    key:"persist-key",
    storage
}
const persistedReducer = persistReducer(presistConfig , reducers)
const store = createStore(persistedReducer, {}, applyMiddleware(thunk))
const persistor = persistStore(store)
export {persistor , store}
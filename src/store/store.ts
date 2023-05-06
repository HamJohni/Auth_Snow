import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {developers} from "@/store/reducers/developers";


const rootReducer = combineReducers({
    developers
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootStore = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
import {configureStore} from "@reduxjs/toolkit";
import developers from "@/store/reducers/developers";
import user from "@/store/reducers/user";
import profile from "@/store/reducers/profile";


const store = configureStore({
    reducer: {
        developers: developers,
        user: user,
        profile: profile
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
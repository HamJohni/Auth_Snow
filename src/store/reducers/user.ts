import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "@/models/FormType/FormType";

interface UserState {
    user: IUser;
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    user: {},
    isLoading: false,
    error: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        increment(state,action: PayloadAction<IUser>){
            state.user = action.payload
        }
    }
})

export default userSlice.reducer
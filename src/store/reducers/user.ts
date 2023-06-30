import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IUser} from "@/models/FormType/FormType";
import axios from "axios";

export const getUser = createAsyncThunk(
    "user/getUser",
    async (id, userApi) => {
        try {
            const res = await axios.get(`http://localhost:/users?id=${id}`);

            return res.data[0];

        } catch (e) {
            return userApi.rejectWithValue("Не удалось получить юзера");
        }
    }
);

interface UserState {
    user: IUser | null;
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    user: null,
    isLoading: false,
    error: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state: any,action) => {
            state.user = action.payload
        }
    },
    extraReducers: {
        [getUser.rejected]: (state, action) => {
            state.error = action.payload;
            state.status = "error";
        },
        [getUser.pending]: (state) => {
            state.status = "loading";
        },
        [getUser.fulfilled]: (state, action) => {
            state.status = true;
            state.user = action.payload;
        }
    }
})

export const {logout} = userSlice.actions
export default userSlice.reducer
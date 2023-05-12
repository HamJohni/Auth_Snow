import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "@/models/FormType/FormType";
import axios from "axios";

export const getUser = createAsyncThunk(
    "user/getUser",
    async (id, userApi) => {
        try {
            const res = await axios.get(`http://localhost:4080/users?id=${id}`);

            return res.data[0];

        } catch (e) {
            return userApi.rejectWithValue("Не удалось получить юзера");
        }
    }
);
export const getAllUsers = createAsyncThunk(
    'user/getAllUsers',
    async () => {
        try {
            const {data} = await axios.get('http://localhost:4080/users');
            return data;
        } catch(e) {
            console.log(e)
        }
    }
)

interface UserState {
    user: IUser;
    isLoading: boolean;
    error: string;
    users: IUser[]
}

const initialState: UserState = {
    user: {},
    isLoading: false,
    error: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
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
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.users = action.payload
        }
    }
})

export default userSlice.reducer
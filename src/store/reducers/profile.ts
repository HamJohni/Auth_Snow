import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProfile = createAsyncThunk(
    "profile/getProfile",
    async (filter, profileApi) => {
        try {
            const res = await axios.get(`http://localhost:4080/users`);

            return res.data;

        } catch (e) {
            return profileApi.rejectWithValue("Не удалось получить разработчиков");
        }
    }
);

const initialState: any = {
    profile: {},
    status: "",
    error: "",
    filter: {
        name: "Zhanybek"
    }
};

const profile = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers: {
        [getProfile.rejected]: (state, action) => {
            state.error = action.payload;
            state.status = "error";
        },
        [getProfile.pending]: (state) => {
            state.status = "loading";
        },
        [getProfile.fulfilled]: (state, action) => {
            state.status = true;
            state.profile = action.payload;
        }
    },
});

export default profile.reducer;
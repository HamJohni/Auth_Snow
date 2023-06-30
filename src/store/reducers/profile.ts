import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//не узалять нужен
export const getProfile = createAsyncThunk(
    "profile/getProfile",
    async (id, profileApi) => {
        try {
            const token = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('token')) : null;
            const res = await axios.get(`https://akan2002.pythonanywhere.com/api/users/${id}/`, {headers: {
                "Authorization": `Bearer ${token.access}`
            }});
            return res.data;
        } catch (e) {
            return profileApi.rejectWithValue("Не удалось получить разработчиков");
        }
    }
);

const initialState: any = {
    profile: null,
    status: "",
    error: "",
};

const profileSlice = createSlice({
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

export default profileSlice.reducer;
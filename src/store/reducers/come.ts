import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCome = createAsyncThunk(
    "come/getCome",
    async (id, profileApi) => {
        try {
            const res = await axios.get(`http://localhost:4080/come`);

            return res.data;
        } catch (e) {
            return profileApi.rejectWithValue("Не удалось получить разработчиков");
        }
    }
);

const initialState: any = {
    come: null,
    status: "",
    error: "",
};

const comeSLice = createSlice({
    name: "come",
    initialState,
    reducers: {},
    extraReducers: {
        [getCome.rejected]: (state, action) => {
            state.error = action.payload;
            state.status = "error";
        },
        [getCome.pending]: (state) => {
            state.status = "loading";
        },
        [getCome.fulfilled]: (state, action) => {
            state.status = true;
            state.come = action.payload;
        }
    },
});

export default comeSLice.reducer;
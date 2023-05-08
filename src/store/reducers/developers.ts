<<<<<<< HEAD
import { IUser } from "@/models/FormType/FormType";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IUser = {
  developers: [],
  isLoading: false,
  error: "",
};

export const developers = createSlice({
  name: "developers",
  initialState,
  reducers: {},
});

export default developers.reducer;
=======
import {IUser} from "@/models/FormType/FormType";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllDevelopers = createAsyncThunk(
    'developers/getAllDevelopers',
    async (_, developersApi) => {
        try {
            const res = await axios.get('http://localhost:4080/developers')

            return res.data

        } catch (e) {
            return developersApi.rejectWithValue("Не удалось получить разработчиков")
        }
    }
)

interface developersState {
    developers: IUser[],
    status: string,
    error: string
}

const initialState: developersState = {
    developers: [],
    status: '',
    error: ''
}

const developers = createSlice({
    name: 'developers',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllDevelopers.rejected]: (state, action) => {
            state.error = action.payload
            state.status = 'error'
        },
        [getAllDevelopers.pending]: (state) => {
            state.status = 'loading'
        },
        [getAllDevelopers.fulfilled]: (state, action) => {
            state.status = true
            state.developers = action.payload
        }
    }
})

export default developers.reducer;
>>>>>>> 6845b5e99f8d8ae8ff08da4b431ca39b6188c431

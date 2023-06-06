import { IUser } from "@/models/FormType/FormType";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDevelopers = createAsyncThunk(
  "developers/getAllDevelopers",
  async (_, developersApi) => {
    try {
      const res = await axios.get("http://localhost:4080/users");

      return res.data;

    } catch (e) {
      return developersApi.rejectWithValue("Не удалось получить разработчиков");
    }
  }
);

interface developersState {
  developers: IUser[];
  status: string;
  error: string;
}

const initialState: developersState = {
  developers: [],
  status: "",
  error: "",
};

const developers = createSlice({
  name: "developers",
  initialState,
  extraReducers: {
    [getDevelopers.rejected]: (state, action) => {
      state.error = action.payload;
      state.status = "error";
    },
    [getDevelopers.pending]: (state) => {
      state.status = "loading";
    },
    [getDevelopers.fulfilled]: (state, action) => {
      state.status = true;
      state.developers = action.payload;
    },
  },
});

export default developers.reducer;
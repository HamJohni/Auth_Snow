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

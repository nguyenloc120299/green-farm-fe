import { createSlice } from "@reduxjs/toolkit";

export interface TYPE_STATE {
  loading: {
    [type: string]: string;
  } | null;
}

const initialState: TYPE_STATE = {
  loading: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = appSlice.actions;

export default appSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export interface TYPE_STATE {
  loading: {
    [type: string]: string;
  } | null;
  isOpen: {
    [type: string]: string;
  } | null;
}

const initialState: TYPE_STATE = {
  loading: {},
  isOpen: {},
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state, action) => {
       state.loading = {
        ...state.loading,
        [action.payload.type]: action.payload.value,
      };
    },
    setOpen: (state, action) => {
      state.isOpen = {
        ...state.isOpen,
        [action.payload.type]: action.payload.value,
      };
    },
  },
});

export const { setLoading, setOpen } = appSlice.actions;

export default appSlice.reducer;

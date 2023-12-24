import { createSlice } from "@reduxjs/toolkit";
import { USER } from "types/auth";

export interface TYPE_STATE {
  user: USER | null;
  landId: number | null;
  land: Array<any>;
}

const initialState: TYPE_STATE = {
  user: null,
  land: [],
  landId: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.userData;
      state.land = action.payload.myland;
    },
    setMyLand: (state, action) => {
      state.land = action.payload;
    },
    onSetLandId: (state, action) => {
      state.landId = action.payload;
    },
  },
});

export const { setUser, setMyLand, onSetLandId } = userSlice.actions;

export default userSlice.reducer;

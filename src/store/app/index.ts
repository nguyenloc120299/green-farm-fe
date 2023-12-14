import { createSlice } from "@reduxjs/toolkit";

export interface TYPE_STATE {
  appConfig: {
    deviceId: string;
  };
  isLogin: boolean;
  loading: {
    [type: string]: string;
  } | null;
  isOpen: {
    [type: string]: string;
  } | null;
  message: {
    isOpen: boolean;
    title?: string;
    description?: string;
    onClick?: () => void;
  };
}

const initialState: TYPE_STATE = {
  appConfig: {
    deviceId: "",
  },
  isLogin: false,
  loading: {},
  isOpen: {},
  message: {
    isOpen: false,
    title: "",
    description: "",
  },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setDeviceId: (state, action) => {
      state.appConfig.deviceId = action.payload;
    },
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
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setLoginApp: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export const { setLoading, setOpen, setMessage, setLoginApp,setDeviceId } =
  appSlice.actions;

export default appSlice.reducer;

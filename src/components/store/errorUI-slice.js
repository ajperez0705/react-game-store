import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: "errorUI",
  initialState: {
    notification: null,
  },
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const errorUIActions = errorSlice.actions;
export default errorSlice;

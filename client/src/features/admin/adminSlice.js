import { createSlice } from "@reduxjs/toolkit";

export const currentRoleSlice = createSlice({
  name: "currentRoleSlice",
  initialState: {
    role: false,
  },
  reducers: {
    getRole: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { getRole } = currentRoleSlice.actions;
export default currentRoleSlice.reducer;

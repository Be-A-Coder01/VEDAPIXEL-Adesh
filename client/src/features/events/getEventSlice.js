import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getevents = createAsyncThunk(
  "events/fetchAll",
  async (route, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_WEBSITE_BACKEND_URL}${route}`
      );

      if (!response.ok) throw new Error("Failed to fetch events");

      const result = await response.json();
      return result.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getEventSlice = createSlice({
  name: "getEventSlice",
  initialState: {
    eventData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getevents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getevents.fulfilled, (state, action) => {
        state.loading = false;
        state.eventData = [];
        state.eventData.push(...action.payload);
      })
      .addCase(getevents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default getEventSlice.reducer;

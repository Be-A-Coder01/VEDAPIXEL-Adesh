import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createEvents = createAsyncThunk(
  "createEvents",
  async (eventData, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3000/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        return rejectWithValue(errorData);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const adminPostSlice = createSlice({
  name: "eventDetails",
  initialState: {
    event: [],
    loading: false,
    error: null,
  },
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(createEvents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.event.push(action.payload);
      })
      .addCase(createEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default adminPostSlice.reducer;

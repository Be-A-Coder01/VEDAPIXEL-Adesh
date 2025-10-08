import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addevent = createAsyncThunk(
  "booking/addevent",
  async ({ userId, eventData }, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, eventData }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to add event to cart");
      }

      const data = await response.json();
      return data.cart;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const eventBookingSlice = createSlice({
  name: "booking",
  initialState: {
    cart: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addevent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addevent.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(addevent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default eventBookingSlice.reducer;

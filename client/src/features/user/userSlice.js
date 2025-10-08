import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// signup
export const createUser = createAsyncThunk(
  "user/createUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_WEBSITE_BACKEND_URL}signup`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      console.log(result, "res");
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// login
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_WEBSITE_BACKEND_URL}login`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logoutUser = createAsyncThunk("user/logoutUser", async () => {
  let token = localStorage.getItem("userToken");
  if (token) {
    localStorage.clear();
    return { status: "Logout successfully" };
  } else {
    return { status: "Login please" };
  }
});

const userSlice = createSlice({
  name: "userDetails",
  initialState: {
    user: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // createUser
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // loginUser
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user.push(action.payload);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // logoutUser
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.user = [];
        state.loading = false;
      });
  },
});

export default userSlice.reducer;

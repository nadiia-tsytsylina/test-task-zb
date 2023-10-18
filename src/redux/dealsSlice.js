import { createSlice } from "@reduxjs/toolkit";
import { fetchDeals } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const dealsSlice = createSlice({
  name: "deals",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDeals.pending, handlePending)
      .addCase(fetchDeals.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchDeals.rejected, handleRejected);
  },
});

export const dealsReducer = dealsSlice.reducer;

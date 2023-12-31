import { createSlice } from "@reduxjs/toolkit";
import {
  AddNewProduct,
  DeleteProduct,
  GetAllData,
  GetById,
} from "./api_actions";

const initialState = {
  about: [],
  loading: false,
  error: null,
  currentAbout: null,
};
const aboutSlice = createSlice({
  name: "aboutSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetAllData.fulfilled, (state, action) => {
        state.loading = false;
        state.about = action.payload;
      })
      .addCase(GetAllData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(GetAllData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(GetById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentAbout = action.payload;
      })
      .addCase(GetById.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(GetById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //Add new prod
      .addCase(AddNewProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.about = [...state.about, action.payload];
      })
      .addCase(AddNewProduct.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(AddNewProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // DELETE Prod
      .addCase(DeleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.about = action.payload;
      })
      .addCase(DeleteProduct.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(DeleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});


export const aboutReducer = aboutSlice.reducer;
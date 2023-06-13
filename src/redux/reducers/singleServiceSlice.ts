import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IServices } from "../../models/IServices";
import { fetchServiceById } from "./ActionCreators";

interface ServiceState {
  service: IServices[];
  isLoading: boolean;
  error: string;
}

const initialState: ServiceState = {
  service: [],
  isLoading: false,
  error: "",
};

export const singleService = createSlice({
  name: "singleService",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchServiceById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchServiceById.fulfilled,
      (state, action: PayloadAction<IServices[] | any>) => {
        state.isLoading = false;
        state.error = "";
        state.service = action.payload;
      }
    );
    builder.addCase(fetchServiceById.rejected, (state) => {
      state.isLoading = false;
      state.error = "error...";
    });
  },
});

export default singleService.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IServices } from "../../models/IServices";
import { fetchServices } from "./ActionCreators";

interface ServicesState {
  services: IServices[];
  isLoading: boolean;
  error: string;
  openedModal: boolean;
  searchValue: string;
}

const initialState: ServicesState = {
  services: [],
  isLoading: false,
  error: "",
  openedModal: false,
  searchValue: "",
};

export const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setOpenedModal: (state, action) => {
      state.openedModal = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchServices.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchServices.fulfilled,
      (state, action: PayloadAction<IServices[] | any>) => {
        state.isLoading = false;
        state.error = "";
        state.services = action.payload;
      }
    );
    builder.addCase(fetchServices.rejected, (state) => {
      state.isLoading = false;
      state.error = "error...";
    });
  },
});

export const { setOpenedModal, setSearchValue } = serviceSlice.actions;

export default serviceSlice.reducer;

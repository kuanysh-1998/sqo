import axios from "axios";
import { IServices } from "../../models/IServices";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchServices = createAsyncThunk(
  "service/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get<IServices[]>(
        "https://6484555bee799e32162688f2.mockapi.io/kazgisa"
      );
      return res.data;
    } catch (e) {
      return rejectWithValue("Не удалось загрузить....");
    }
  }
);

export const fetchServiceById = createAsyncThunk(
  "service/fetchById",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get<IServices[]>(
        "https://6484555bee799e32162688f2.mockapi.io/kazgisa"
      );

      return res.data;
    } catch (e) {
      return rejectWithValue("Не удалось загрузить....");
    }
  }
);

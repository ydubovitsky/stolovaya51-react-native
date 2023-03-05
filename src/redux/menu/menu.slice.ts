import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../services/api-call.service";
import { RootState } from "../store";
import { CustomDateInterface, MenuInterface, MenuStateInterface } from "../../types";
import { BACKEND_URL } from '../../services/endpoints';

// ------------------------------------ AsyncThunk ------------------------------------

export const createNewMenuAsync: any = createAsyncThunk(
  "menu/create",
  async (menu) => {
    const response = await fetchData({
      method: "POST",
      url: `${BACKEND_URL}/api/v1/menu`,
      data: menu,
      responseType: "json",
    });
    const result = (await response) as any;
    return result;
  }
);

export const getMenuByDateAsync: any = createAsyncThunk(
  "meal/get-by-date",
  async (date: Date) => {
    const response = await fetchData({
      method: "GET",
      //! date.toLocaleDateString() => 2023.01.05
      url: `${BACKEND_URL}/api/v1/menu?date=${date.toLocaleDateString()}`,
      responseType: "json",
    });
    const result = (await response) as any;
    return result;
  }
);

// ------------------------------------ InitState ------------------------------------

const initialState: MenuStateInterface = {
  menu: {
    menuEntities: []
  },
  status: "idle",
};

// ------------------------------------ Slice ------------------------------------

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNewMenuAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createNewMenuAsync.fulfilled, (state, action) => {
        state.status = "loaded";
      })
      .addCase(createNewMenuAsync.rejected, (state) => {
        state.status = "failed";
      })
      //!getMenuByCustomDateAsync
      .addCase(getMenuByDateAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMenuByDateAsync.fulfilled, (state, action) => {
        state.menu = action.payload;
        state.status = "loaded";
      })
      .addCase(getMenuByDateAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

// ------------------------------------ Selectors ------------------------------------

export const menuSelector = (state: RootState): MenuInterface => state.menu.menu;

// ------------------------------------ Default import ------------------------------------

export default menuSlice.reducer;

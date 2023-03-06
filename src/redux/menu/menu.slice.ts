import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../services/api-call.service";
import { BACKEND_URL } from '../../services/endpoints';
import { MenuInterface, MenuStateInterface } from "../../types";
import { getFormattedDateString } from "../../utils/date.util";
import { RootState } from "../store";

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

export const getMenuByDateAsync = createAsyncThunk<MenuInterface, Date>(
  "meal/get-by-date",
  async (date: Date) => {
    console.log(date.toLocaleDateString());
    const responseData = await fetchData({
      method: "GET",
      url: `${BACKEND_URL}/api/v1/menu?date=${getFormattedDateString(date, 'DD.MM.yyyy')}`,
      responseType: "json",
    });
    return responseData;
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

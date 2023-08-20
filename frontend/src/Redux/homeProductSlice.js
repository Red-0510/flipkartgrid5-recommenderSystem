import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import productService from "./productService";
import { toast } from "react-toastify";

const initialState = {
  userRecommendations:[],
  locationRecommendations:[],
  salesRecommendations:[],
  userHistory:[],
  ageRecommendations:[]
};

const homeProductSlice = createSlice({
    name: "homeProduct",
    initialState,
    reducers: {
      SET_USER_RECOMMENDATIONS(state,action){
          state.userRecommendations=action.payload;
      },
      SET_LOCATION_RECOMMENDATIONS(state,action){
          state.locationRecommendations=action.payload;
      },
      SET_SALES_RECOMMENDATIONS(state,action){
          state.salesRecommendations=action.payload;
      },
      SET_USER_HISTORY(state,action){
        state.userHistory=action.payload;
      },
      SET_AGE_RECOMMENDATIONS(state,action){
          state.ageRecommendations=action.payload;
      }
    },
   
  });
  
  export const { SET_USER_RECOMMENDATIONS,SET_LOCATION_RECOMMENDATIONS,SET_SALES_RECOMMENDATIONS,SET_USER_HISTORY,SET_AGE_RECOMMENDATIONS} =
    homeProductSlice.actions;
  
  
  export default homeProductSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import productService from "./productService";
import { toast } from "react-toastify";

const initialState = {
  product:{
    name:"",
    category:"",
    company:"",
    rating:0,
    description:"",
    price:0,
    image:"",
    id:""
  },
  similarProducts:[],
  associableProducts:[],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    SET_PRODUCT(state,action){
        const profile = action.payload;
        state.product.name = profile.name;
        state.product.category = profile.category;
        state.product.company = profile.company;
        state.product.rating = profile.rating;
        state.product.description = profile.description;
        state.product.price = profile.price;
        state.product.image = profile.image;
        state.product.id = profile._id
    },
    SET_SIMILAR_PRODUCT(state,action){
        state.similarProducts=action.payload;
    },
    SET_ASSOCIABLE_PRODUCT(state,action){
        state.associableProducts=action.payload;
    }
  },
 
});

export const { SET_PRODUCT,SET_SIMILAR_PRODUCT,SET_ASSOCIABLE_PRODUCT} =
  productSlice.actions;


export default productSlice.reducer;

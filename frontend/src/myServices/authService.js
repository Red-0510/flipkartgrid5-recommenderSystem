import axios from "axios";
import { toast } from "react-toastify";
import {SET_LOGIN, SET_LOGOUT, SET_USER} from "../redux/authSlice"
import { SET_SIMILAR_PRODUCT } from "redux/productSlice";
import { SET_PRODUCT } from "redux/productSlice";
import { SET_USER_RECOMMENDATIONS } from "redux/homeProductSlice";
import { SET_LOCATION_RECOMMENDATIONS } from "redux/homeProductSlice";
import { SET_SALES_RECOMMENDATIONS } from "redux/homeProductSlice";
import { SET_USER_HISTORY } from "redux/homeProductSlice";
import { SET_AGE_RECOMMENDATIONS } from "redux/homeProductSlice";
import { SET_ASSOCIABLE_PRODUCT } from "redux/productSlice";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

// Register User
export const registerUser = async (userData,dispatch) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/user/register`,
      userData,
      { withCredentials: true }
    );
    const data = response.data
    if (!data.success) {
      throw new Error(response)
    }
    
    toast.success(data.message);
    await dispatch(SET_LOGIN(true));
    await dispatch(SET_USER(data.data));
    return data.data;

  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

// Login User
export const loginUser = async (userData,dispatch) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/user/login`,
      userData,
      { withCredentials: true }
    );
    const data = response.data
    if (!data.success) {
      throw new Error(response)
    }
    
    toast.success(data.message);
    await dispatch(SET_LOGIN(true));
    console.log(data.data)
    await dispatch(SET_USER(data.data));
    return data.data;

  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

// Logout User
export const logoutUser = async (dispatch) => {
  try {
    // const response = await axios.get(`${BACKEND_URL}/api/user/logout`);
    // const data = response.data
    // if (!data.success) {
    //   throw new Error(response)
    // }
    
    await dispatch(SET_LOGIN(false));
    await dispatch(SET_LOGOUT());
    toast.success("Logout SuccessFul");
    return {
      success:true
    }
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

// Forgot Password
export const forgotPassword = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/user/password`,
      userData,
      { withCredentials: true }
    );
    const data = response.data
    if (!data.success) {
      throw new Error(response)
    }
    toast.success(response.data.message);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

// Reset Password
export const resetPassword = async (userData, resetToken,dispatch) => {
  try {
    const response = await axios.put(
      `${BACKEND_URL}/api/user/resetpassword/${resetToken}`,
      userData,
      { withCredentials: true }
    );
    const data = response.data
    if (!data.success) {
      throw new Error(response)
    }
    toast.success(response.data.message);
    await dispatch(SET_USER(data.data));
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};


// Update Cart
export const updateCart = async (cart,dispatch) => {
  try {
    const response = await axios.patch(
      `${BACKEND_URL}/api/user/cart`,
      {cart},
      { withCredentials: true }
    );
    const data = response.data
    if (!data.success) {
      throw new Error(response)
    }
    toast.success(response.data.message);
    console.log(data.data)
    await dispatch(SET_USER(data.data));
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

// Add To Cart
export const addToCart = async (cartData,dispatch) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/user/cart`,
      cartData,
      { withCredentials: true }
    );
    const data = response.data
    if (!data.success) {
      throw new Error(response)
    }
    toast.success(response.data.message);
    await dispatch(SET_USER(data.data));
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

// Update Purchase
export const updatePurchase = async (dispatch) => {
  try {
    const response = await axios.get(
      `${BACKEND_URL}/api/user/buy`,
      { withCredentials: true }
    );
    const data = response.data
    if (!data.success) {
      throw new Error(response)
    }
    toast.success(response.data.message);
    await dispatch(SET_USER(data.data));
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

export const getCartProducts = async (ids)=>{
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/user/product`,
      {ids},
      { withCredentials: true }
    );
    const data = response.data
    if (!data.success) {
      throw new Error(response)
    }
    toast.success(response.data.message);
    console.log(data.data)
    return data.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
}

// buy Product
export const buyProduct = async (productData,dispatch) => {
  try {
    const response = await axios.get(
      `${BACKEND_URL}/api/user/buy`,
      productData,
      { withCredentials: true }
    );
    const data = response.data
    if (!data.success) {
      throw new Error(response)
    }
    toast.success(response.data.message);
    await dispatch(SET_USER(data.data));
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

// get home Product
export const getHomeProduct = async (productQuery,dispatch) => {
  try {
    const response = await axios.get(
      `${BACKEND_URL}/api/product/home`,
      { withCredentials: true }
    );
    const data = response.data
    if (!data.success) {
      throw new Error(response)
    }
    toast.success(response.data.message);
    await dispatch(SET_USER_RECOMMENDATIONS(data.data.userRecommendations));
    await dispatch(SET_LOCATION_RECOMMENDATIONS(data.data.locationRecommendations));
    await dispatch(SET_SALES_RECOMMENDATIONS(data.data.salesRecommendations));
    await dispatch(SET_USER_HISTORY(data.data.userHistory));
    await dispatch(SET_AGE_RECOMMENDATIONS (data.data.ageRecommendations));
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

// get similar and associable Product
export const getSimilarAndAssociableProduct = async (productId,dispatch) => {
  try {
    const response = await axios.get(
      `${BACKEND_URL}/api/product/singleproduct/${productId}`,
      { withCredentials: true }
    );
    const data = response.data
    if (!data.success) {
      throw new Error(response)
    }
    toast.success(response.data.message);
    await dispatch(SET_PRODUCT(data.data.product))
    await dispatch(SET_SIMILAR_PRODUCT(data.data.similarProducts));
    await dispatch(SET_ASSOCIABLE_PRODUCT(data.data.associableProducts));
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

export const getSearchResults = async (searchText) => {
  try {
    console.log(searchText)
    const response = await axios.get(
      `${BACKEND_URL}/api/product/results/${searchText}`,
      { withCredentials: true }
    );
    const data = response.data
    if (!data.success) {
      throw new Error(response)
    }
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

export const buySingleProduct = async (productData,dispatch) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/user/buy`,
      productData,
      { withCredentials: true }
    );
    const data = response.data
    if (!data.success) {
      throw new Error(response)
    }
    toast.success(response.data.message);
    await dispatch(SET_USER(data.data));
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

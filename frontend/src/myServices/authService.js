import axios from "axios";
import { toast } from "react-toastify";
import {SET_LOGIN, SET_USER} from "../redux/authSlice"

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
      userData
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
      userData
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

// Logout User
export const logoutUser = async (dispatch) => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/user/logout`);
    const data = response.data
    if (!data.success) {
      throw new Error(response)
    }
    
    toast.success(data.message);
    await dispatch(SET_LOGIN(false));
    await dispatch(SET_USER(initialState));
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
      userData
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
      userData
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
export const updateCart = async (cartData,dispatch) => {
  try {
    const response = await axios.patch(
      `${BACKEND_URL}/api/user/cart`,
      cartData
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

// Add To Cart
export const addToCart = async (cartData,dispatch) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/user/cart`,
      cartData
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
      `${BACKEND_URL}/api/user/buy`
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

// buy Product
export const buyProduct = async (productData,dispatch) => {
  try {
    const response = await axios.get(
      `${BACKEND_URL}/api/user/buy`,
      productData
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
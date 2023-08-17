import {  createReducer } from '@reduxjs/toolkit'
import Cookies from 'js-cookie';
import { userLoginAction } from './actions';
import { userInfoAction } from './actions';


const userLoginStatus = () => {
    const token =  Cookies.get('token')
    if(token) return true;
    return false;
}
const isLoggedIn = userLoginStatus()
// const isLoggedIn = true;
export const userStatus = createReducer(isLoggedIn,(builder)=>{
    builder.addCase(userLoginAction , (state,action)=>{
        return action.payload;
    })
}) 



const userInfo = {}
export const userCredentials = createReducer(userInfo , (builder) => {
    builder.addCase( userInfoAction, (state,action) => {
        return{
            ...state,
            ...action.payload
        }
    })
})


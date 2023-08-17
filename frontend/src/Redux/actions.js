
import {createAction} from "@reduxjs/toolkit"

const userLoginAction = createAction('/user/status')
const userLogin = (dispatch,isLoggedIn) => {
    const status = isLoggedIn;
    dispatch(userLoginAction(status));
}

const userInfoAction = createAction('/user/info')
const userDetails = (dispatch,userInfo) => {
    dispatch(userInfoAction(userInfo))
}


export {
    userLoginAction,userLogin,
    userInfoAction,userDetails,
}
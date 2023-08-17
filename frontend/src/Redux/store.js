import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension';
import { userCredentials, userStatus } from './reducers';

const MyStore = configureStore({
    reducer : {
        userStatus : userStatus,
        userCredentials : userCredentials,
    }
},composeWithDevTools())

export default MyStore;
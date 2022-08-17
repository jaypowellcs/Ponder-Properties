
import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (userInfo, navigate) => async (dispatch) => {
    try {

        navigate('/');
    } catch(error){
        console.log(error)
    }
};

export const signup = (userInfo, navigate) => async (dispatch) => {
    try {
        
        navigate('/');
    } catch(error){
        console.log(error)
    }
};
import fetch from 'isomorphic-fetch';

import { SignUpActions, SignInActions, UpdateUserProfileActions } from '../constants/actions.js';
import { LoginUser } from '../constants/mock_data';
import { ApiPath } from '../constants/network.constant';
import { http } from '../utils/index';

const Apis = {
    Signin: `${ApiPath}/auth/local`,
    Signup: `${ApiPath}/api/users`,
    UpdateProfile: `${ApiPath}/api/users/me`
}

const signup = (userInput) => {
    return (dispatch) => {
        dispatch({ type: SignUpActions.SignupStart });
        http({
            url: Apis.Signup,
            method: 'POST',
            body: userInput,
            saveAccessToken: true
        })
            .then(data => {
                dispatch({type: SignUpActions.SignupSuccess, payload: data.user})
            });
    }
};

const signin = (userInput) => {
    return (dispatch) => {
        dispatch({ type: SignInActions.SignInStart });
        http({
            url: Apis.Signin,
            method: 'POST',
            body: userInput,
            saveAccessToken: true
        }) 
            .then(data => {
                dispatch({type: SignInActions.SignInSuccess, payload: data.user})
            })
            .catch(error => dispatch({type: SignInActions.SignInFail, payload: error}))
    }
}

const updateProfile = (user) => {
    return (dispatch) => {
        dispatch({ type: UpdateUserProfileActions.UpdateProfileStart });
        http({
            url: Apis.UpdateProfile,
            method: 'PUT',
            body: user
        })
            .then(data => {
                return dispatch({ type: UpdateUserProfileActions.UpdateProfileSuccess, payload: user });
            });
    }
}

export { signup, signin, updateProfile };
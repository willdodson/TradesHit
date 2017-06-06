import { SignUpActions, SignInActions, UpdateUserProfileActions } from '../constants/actions.js';
import { LoginUser } from '../constants/mock_data';
import { ApiPath } from '../constants/network.constant';
import fetch from 'isomorphic-fetch';
import { http } from '../utils/index';

console.log(`${ApiPath} ... Api path`)
const Apis = {
    Signin: `${ApiPath}/auth/local`,
    Signup: `${ApiPath}/api/users`,
    updateProfile: `${ApiPath}/api/users/me`
}
console.log(`${Apis.Signup} ... Signup`);

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
                dispatch({type: SignUpActions.SignupSuccess, payload: LoginUser})
            });
    }
};

const signin = (userInput) => {
    return (dispatch) => {
        console.log('>>>>>> ', JSON.stringify(userInput));
        dispatch({ type: SignInActions.SignInStart });
        http({
            url: Apis.Signin,
            method: 'POST',
            body: userInput,
            saveAccessToken: true
        }) 
            .then(data => {
                dispatch({type: SignUpActions.SignupSuccess, payload: LoginUser})
            })
            .catch(error => dispatch({type: SignUpActions.SignupFail, payload: error}))
    }
}

const updateProfile = (user) => {
    return (dispatch) => {
        dispatch({ type: UpdateUserProfileActions.UpdateProfileStart });
        http({
            url: Apis.updateProfile,
            method: 'PUT',
            body: user
        })
            .then(data => {
                return dispatch({ type: UpdateUserProfileActions.UpdateProfileSuccess, payload: user });
            });
    }
}

export { signup, signin, updateProfile };
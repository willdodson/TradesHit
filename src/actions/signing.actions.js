import { SignUpActions, SignInActions, UpdateUserProfileActions } from '../constants/actions.js';
import { LoginUser } from '../constants/mock_data';
import { ApiPath } from '../constants/network.constant';
import fetch from 'isomorphic-fetch';

console.log(`${ApiPath} ... Api path`)
const Apis = {
    Signin: `${ApiPath}/auth/local`,
    Signup: `${ApiPath}/api/users`
}
console.log(`${Apis.Signup} ... Signup`);

const signup = (userInput) => {
    return (dispatch) => {
        dispatch({ type: SignUpActions.SignupStart });
        fetch( Apis.Signup, {
            "method": 'POST',
            "headers": {
                'content-type': 'application/json'
            },
            "body": JSON.stringify(userInput)
        }) 
            .then((response) => response.json())
            .then(data => dispatch({type: SignUpActions.SignupSuccess, payload: LoginUser}))
    }
};

const signin = (userInput) => {
    return (dispatch) => {
        console.log('>>>>>> ', JSON.stringify(userInput));
        dispatch({ type: SignInActions.SignInStart });
        fetch( Apis.Signin, {
            method: 'POST',
            // mode: "Cors",
            body: JSON.stringify(userInput),
            headers: {
                'content-type': 'application/json'
            }
        }) 
            .then((response) => response.json())
            .then(data => dispatch({type: SignUpActions.SignupSuccess, payload: LoginUser}))
            .catch(error => dispatch({type: SignUpActions.SignupFail, payload: error}))
    }
}

const updateProfile = (user) => {
    return (dispatch) => {
        dispatch({ type: UpdateUserProfileActions.UpdateProfileStart });
        setTimeout(function() {
            dispatch({ type: UpdateUserProfileActions.UpdateProfileSuccess, payload: user });
        }, 1000);
    }
}

export { signup, signin, updateProfile };
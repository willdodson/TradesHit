import { SignUpActions, SignInActions, UpdateUserProfileActions } from '../constants/actions.js';
import { LoginUser } from '../constants/mock_data';

const signup = (userInput) => {
    return (dispatch) => {
        dispatch({ type: SignUpActions.SignupStart });
        setTimeout(function() {
            dispatch({ type: SignUpActions.SignupSuccess, payload: LoginUser });
        }, 100);
    }
};

const signin = (userInput) => {
    return (dispatch) => {
        dispatch({ type: SignInActions.SignInStart });
        setTimeout(function() {
            dispatch({ type: SignInActions.SignInSuccess, payload: LoginUser })
        }, 100);
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
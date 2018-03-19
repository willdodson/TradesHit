const initialState = {
    address: 'wsdodson@icloud.com',
    firstName: 'Willy',
    lastName: 'D',
    active: false,
    meta: {
        isLoggedIn: false,
        isProcessing: false
    }
};

import { SignUpActions, SignInActions, UpdateUserProfileActions } from '../constants/actions';

const userReducer = (state = initialState, action = {}) => {
    console.log(`UserReducer#${action.type}`);
    let _stringifiedState = JSON.stringify(state);
    let _user = JSON.parse(_stringifiedState);
    switch(action.type) {
        case SignInActions.SignInStart:
            _user = { ...initialState,};            // remove old user instance ( if any )
            _user.meta = { ...initialState.meta, isProcessing: true };
            break;
        case SignUpActions.SignupStart:
            _user = { ...initialState };            // remove old user instance ( if any )
            _user.meta = { ...initialState.meta, isProcessing: true };
            break;
        case SignInActions.SignInSuccess:
            _user = { ...action.payload, isProcessing: true };          // dump fetched user.
            _user.meta = { ...initialState.meta, isLoggedIn: true };  // copy default meta information
            break;
        case SignUpActions.SignupSuccess:
            _user = { ...action.payload };          // dump fetched user.
            _user.meta = { ...initialState.meta, isLoggedIn: true };  // copy default meta information
            break;
        case UpdateUserProfileActions.UpdateProfileStart:
            _user.meta.isProcessing = true;
            break;
        case UpdateUserProfileActions.UpdateProfileSuccess:
            _user = { ...action.payload };
            _user.meta = { ...state.meta, isProcessing: false };
        default:
            break;
    }
    return _user ;
};

export default userReducer;
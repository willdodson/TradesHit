import { LandingPageActions } from '../constants/actions';

const defaultError = { hasError: false, details: {} };
const initialState = {
    content: {},
    error: defaultError,
    isFetching: true
}

const landingPageReducer = (state = initialState, action) => {
    let stringifiedState = JSON.stringify(state);
    let _duplicatedState = JSON.parse(stringifiedState, null, 4);
    switch(action.type) {
        case LandingPageActions.FetchLandingPageStart:
            _duplicatedState.isFetching = true;
            _duplicatedState.content = {};
            _duplicatedState.error = defaultError;
            break;
        case LandingPageActions.FetchLandingPageSuccess:
            _duplicatedState.isFetching = false;
            _duplicatedState.content = action.payload;
            _duplicatedState.error = defaultError;
            break;
        case LandingPageActions.FetchLandingPageFail:
            _duplicatedState.isFetching = false;
            _duplicatedState.content = {};
            _duplicatedState.error = { 
                hasError: true, 
                details: action.payload
            };
            break;
        default:
            break;
    }
    return _duplicatedState;
}

export default landingPageReducer;
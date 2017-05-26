import { LandingPageActions } from '../constants/actions';
import { LandingPageData } from '../constants/mock_data';

const fetchLandingPageContent = (payload) => {
    console.log('LandingPage#ActionCreator... called');
    return (dispatch) => {
        console.log('LandingPage#ActionCreator... receive callback & Firing event start event');
        dispatch({type:LandingPageActions.FetchLandingPageStart});
        setTimeout(() => {
            console.log('LandingPage#ActionCreator... Firing success event');
            dispatch({type: LandingPageActions.FetchLandingPageSuccess, payload: LandingPageData});
        }, 100);        
    }
};

export { fetchLandingPageContent };
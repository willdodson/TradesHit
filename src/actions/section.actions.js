import { SectionPageActions } from '../constants/actions';
import { SectionPageData } from '../constants/mock_data';

const fetchSectionPageContent = (sectionName) => {
    console.log('SectionPage#ActionCreator... called');
    return (dispatch) => {
        console.log('SectionPage#ActionCreator... receive callback & Firing event start event');
        dispatch({type:SectionPageActions.FetchSectionPageContentStart});
        setTimeout(() => {
            console.log('SectionPage#ActionCreator... Firing success event');
            dispatch({type: SectionPageActions.FetchSectionPageContentSuccess, payload: SectionPageData(sectionName)});
        }, 2000);        
    }
};

export { fetchSectionPageContent };
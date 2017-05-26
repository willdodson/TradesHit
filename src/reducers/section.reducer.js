import { SectionPageActions } from '../constants/actions';

const defaultError = { hasError: false, details: {} };
const initialState = {
    items: {},
    error: defaultError,
    isFetching: true
}

const sectionPageReducer = (state = initialState, action) => {
    let stringifiedState = JSON.stringify(state);
    let _section = JSON.parse(stringifiedState, null, 4);
    switch(action.type) {
        case SectionPageActions.FetchSectionPageContentStart:
            _section.isFetching = true;
            _section.items = {};
            _section.error = defaultError;
            break;
        case SectionPageActions.FetchSectionPageContentSuccess:
            _section.isFetching = false;
            _section.error = defaultError;
            _section = { ..._section, ...action.payload };
            break;
        case SectionPageActions.FetchSectionPageContentFail:
            _section.isFetching = false;
            _section.items = {};
            _section.error = { 
                hasError: true, 
                details: action.payload
            };
            break;
        default:
            break;
    }
    return _section;
}

export default sectionPageReducer;
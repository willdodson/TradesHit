import { combineReducers } from 'redux';

import user from './user.reducer';
import landingPage from './landing_page.reducer';
import sectionPage from './section.reducer';
import productDetail from './product_detail.reducer';

export default combineReducers({ 
    user, 
    landingPage,
    sectionPage,
    productDetail
})

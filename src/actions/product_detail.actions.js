import { ProductDetailPageActions } from '../constants/actions';
import { ProductDetailData } from '../constants/mock_data';

const fetchProductDetailPageContent = (productName) => {
    console.log('ProductDetailPage#ActionCreator... called');
    return (dispatch) => {
        console.log('ProductDetailPage#ActionCreator... receive callback & Firing event start event');
        dispatch({type:ProductDetailPageActions.FetchProductDetailContentStart});
        setTimeout(() => {
            console.log('ProductDetailPage#ActionCreator... Firing success event');
            dispatch({type: ProductDetailPageActions.FetchProductDetailContentSuccess, payload: ProductDetailData(productName)});
        }, 2000);        
    }
};

export { fetchProductDetailPageContent };
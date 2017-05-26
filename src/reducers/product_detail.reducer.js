import { ProductDetailPageActions } from '../constants/actions';

const defaultError = { hasError: false, details: {} };
const initialState = {
    detail: {},
    error: defaultError,
    isFetching: true
}

const productDetailPageReducer = (state = initialState, action) => {
    let stringifiedState = JSON.stringify(state);
    let _productDetail = JSON.parse(stringifiedState, null, 4);
    switch(action.type) {
        case ProductDetailPageActions.FetchProductDetailContentStart:
            _productDetail.isFetching = true;
            _productDetail.detail = {};
            _productDetail.error = defaultError;
            break;
        case ProductDetailPageActions.FetchProductDetailContentSuccess:
            _productDetail.isFetching = false;
            _productDetail.error = defaultError;
            _productDetail.detail = { ..._productDetail, ...action.payload };
            break;
        case ProductDetailPageActions.FetchProductDetailContentFail:
            _productDetail.isFetching = false;
            _productDetail.detail = {};
            _productDetail.error = { 
                hasError: true, 
                details: action.payload
            };
            break;
        default:
            break;
    }
    return _productDetail;
}

export default productDetailPageReducer;
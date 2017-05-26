import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

let logger = (store) => (next) => (action) => {
    if(typeof action  =='function'){
        console.log('[Async Event] ....');
    }else{
        console.log(`[Action][${action.type}] ---> `, action.payload);
    }
    return next(action);
};
const _middlewares = [logger, thunk];
export default applyMiddleware(..._middlewares);
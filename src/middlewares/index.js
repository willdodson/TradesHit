import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

let logger = (store) => (next) => (action) => {
    if(typeof action  =='function'){
        console.log('[Async Event] ....');
    }else{
        console.log(`[${action.type}] ---> `, action.payload);
    }
    return next(action);
};

export default applyMiddleware( logger, thunk);
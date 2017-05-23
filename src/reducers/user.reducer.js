const initialState = {};

const userReducer = (state = initialState, action = {}) => {
    console.log(`UserReducer#${action.type}`);
    let _stringifiedState = JSON.stringify(state);
    let _updatedState = JSON.parse(_stringifiedState);
    return _updatedState ;
};

export default userReducer;
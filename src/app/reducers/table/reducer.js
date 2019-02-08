var C = require("../../constants");
var initialState = require("../../initialState");

const tableReducer = function(state,action) {
    var newState = Object.assign({},state);
    switch(action.type) {
        case C.TOGGLE_FETCHING:
            newState.isFetching = !(newState.isFetching);
            return newState;
        case C.SET_DATA:
            if (typeof action.data !== typeof undefined)
                newState.data = [].concat(action.data); // New array
            else
                newState.data = undefined;
            newState.isInvalid = action.invalid;
            newState.isFetching = false;
            return newState;
        case C.SET_START:
            newState.start = action.start;
            return newState;
        case C.SET_COUNT:
            newState.count = action.count;
            newState.start = 0; // Start index will NEED to be reset as we do page calculation in pagination component for this demo...
            return newState;
        case C.SET_SORT_COL:
            if (newState.sort_col === action.col)
                newState.sort_asc = !(newState.sort_asc);
            newState.sort_col = action.col;
            return newState;
        case C.SET_QUERY:
            newState.query = action.query;
            // Reset start to 0 - we probably should remember previous position from unqueried view but for demo...
            newState.start = 0; 
            return newState;
        default: return state || initialState.table;
    }
};

export default tableReducer;
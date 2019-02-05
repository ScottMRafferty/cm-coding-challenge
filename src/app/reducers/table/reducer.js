var C = require("../../constants");
var initialState = require("../../initialState");

const tableReducer = function(state,action) {
    var newState = Object.assign({},state);
    switch(action.type) {
        case C.SET_DATA:
            newState.data = action.data;
            newState.isInvalid = false;
            return newState;
        case C.SET_START:
            newState.start = action.start;
            return newState;
        case C.SET_COUNT:
            newState.count = action.count;
            return newState;
        case C.SET_SORT_COL:
            if (newState.sort_col === action.col)
                newState.sort_asc = !(newState.sort_asc);
            newState.sort_col = action.col;
            return newState;
        case C.SET_QUERY:
            newState.query = action.query;
            return newState;
        default: return state || initialState.table;
    }
};

export default tableReducer;







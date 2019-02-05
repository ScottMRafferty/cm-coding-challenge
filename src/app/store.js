var Redux = require("redux");
var thunk = require('redux-thunk').default;
import tableReducer from "./reducers/table/reducer";

var rootReducer = Redux.combineReducers({
    table: tableReducer
});

module.exports = Redux.applyMiddleware(thunk)(Redux.createStore)(rootReducer);

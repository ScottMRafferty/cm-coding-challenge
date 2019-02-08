import * as C from '../../constants';
import "babel-polyfill";

// Loads the data file from remote and converts it to a JSON object - one off for this demo
export function fetchData() {
    return async function(dispatch, getState) {
        dispatch(toggleFetching());
        fetch('https://raw.githubusercontent.com/mcspud/cm-coding-challenge/master/data.txt')
        .then(function(response) {
            return response.text();
        })
        .then(function(textData) {
            let parsedData = textData.replace(/'/g, '"');
            dispatch(setData(JSON.parse(parsedData), false));
        });   
    }
}

// Toggle function (toggle simply to test update of table with a property 
// that is not passed to reselect during dev - can be replaced with setFetching for prod)
export function toggleFetching() {
    return {type: C.TOGGLE_FETCHING};
} 

export function setData(data, invalid) {
    return {type: C.SET_DATA, data: data, invalid: invalid};
}

export function setStart(start) {
    return {type: C.SET_START, start: start};
}

export function setCount(count) {
    return {type: C.SET_COUNT, count: count};
}

export function setQuery(query) {
    let q = (query === "") ? undefined : query;
    return {type: C.SET_QUERY, query: q};
}

export function setSortCol(col) {
    return {type: C.SET_SORT_COL, col: col};
}
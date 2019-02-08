var React = require('react'); // Here for query highlight decoration only
import { createSelector } from 'reselect';

// Simple helper sort function
function sortObj(list, key, asc) {
    function compare(a, b) {
        a = a[key];
        b = b[key];
        var type = (typeof(a) === 'string' ||
                    typeof(b) === 'string') ? 'string' : 'number';
        var result;
        if (asc === true) {
            if (type === 'string') result = a.localeCompare(b);
            else result = a - b;
        } else {
            if (type === 'string') result = b.localeCompare(a);
            else result = b - a;
        }
        return result;
    }
    return list.sort(compare);
}

// Filter the records based on query
const getRecordsFiltered = (records, query) => {
    
    if (typeof records === typeof undefined)
        return [];

    let newRecords = records.map(e => ({...e})); // Clone the entire array

    if (typeof query === typeof undefined)
        return newRecords;

    return newRecords.filter(function(record, i) {
        let results = Object.keys(record).map(function(e) {
            let pos = record[e].toLowerCase().indexOf(query.toLowerCase());
            // Next two lines is a fancy decorator for highlighting query term in the data - comment out to remove
            if (pos > -1)
                record[e] = <span>{record[e].substring(0, pos)}<strong><mark>{record[e].substring(pos,pos + query.length)}</mark></strong>{record[e].substring(pos+query.length, record[e].length)}</span>

            return pos > -1;
        });
        return results.indexOf(true) > -1;
    });
}

// Sort the records
const getRecordsSorted = (records, sort_col, sort_asc) => {

    if (sort_asc === true)
        return sortObj(records,sort_col, sort_asc)
    else
        return sortObj(records,sort_col, sort_asc)
}

// Grab a subset or records based on current UI state
const getRecordsSubset = (records, start, count) => {
    if (records.length > count) {
        return records.slice(start, start+count);
    } else {
        return records;
    }
}

// A wrapper function for Filter and Sort
const getRecords = (records, query, start, count, sort_col, sort_asc) => {

    let filteredRecords = getRecordsFiltered(records,query);

    if (typeof sort_col !== undefined)
       filteredRecords = getRecordsSorted(filteredRecords, sort_col, sort_asc);

    return {records: filteredRecords, start: start, count: count};

}

// Reselect function to return object for total records and subset of display records
export const getDisplayData = createSelector(
    getRecords,
    (obj) => {return {total: obj.records.length, data: getRecordsSubset(obj.records, obj.start, obj.count)}}
)
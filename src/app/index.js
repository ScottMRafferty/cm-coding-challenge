var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;
var store = require('./store');
import TableView from './views/TableView';

ReactDOM.render(
    <Provider store={store}>
        <TableView />
    </Provider>,
    document.getElementById("table_app")
);
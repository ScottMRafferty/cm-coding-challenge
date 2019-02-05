var React = require('react');
var ReactRedux = require("react-redux");
import * as actions from "../reducers/table/actions";
import Pagination from '../components/Pagination';
import Query from '../components/Query';
import Count from '../components/Count';
import Table from '../components/Table';
import * as selectors from "../reducers/table/selectors";
import {createSelector} from 'reselect';

class TableView extends React.Component {

    componentWillMount = () => {
        this.componentWillReceiveProps(this.props);
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.table.isInvalid === true && nextProps.table.isFetching === false)
            nextProps.fetchData();
    }

    render() {
        return (
            <div className="col-sm-12" style={{padding: '50px'}}>
                <div className="row">
                    <Query query={this.props.table.query} />
                    <Count count={this.props.table.count} />
                    <Pagination start={this.props.table.start} count={this.props.table.count} total={this.props.total} />
                </div>
                <Table />
            </div>
        )
    }
    
}

var mapStateToProps = function(state, ownProps) {
    return {table: state.table, total: selectors.getRecordTotal(state.table.data, state.table.query)};
};


var mapDispatchToProps = function(dispatch){
	return {
        fetchData:      function() { dispatch(actions.fetchData())}
    };
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(TableView);
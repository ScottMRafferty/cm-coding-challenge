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
                    <div className="btn-group col-sm-2">
                        <button className="btn btn-primary" onClick={()=>this.props.setData(undefined, true)}>Refresh</button>
                    </div>
                    <Pagination 
                        start={this.props.table.start} 
                        count={this.props.table.count} 
                        total={this.props.displayData.total} 
                    />
                </div>
                <Table 
                    data={this.props.displayData.data} 
                    isFetching={this.props.table.isFetching} 
                    sort_col={this.props.table.sort_col} 
                    sort_asc={this.props.table.sort_asc}
                    setSortCol={this.props.setSortCol}
                />
            </div>
        )
    }
    
}

var mapStateToProps = function(state, ownProps) {
    return {
        table: state.table, 
        displayData: selectors.getDisplayData(state.table.data, state.table.query, state.table.start, state.table.count, state.table.sort_col, state.table.sort_asc)
    };
};


var mapDispatchToProps = function(dispatch){
	return {
        fetchData:      function() { dispatch(actions.fetchData())},
        setData:        function(data, invalid) { dispatch(actions.setData(data, invalid))},
        toggleFetching: function() { dispatch(actions.toggleFetching())},
        setSortCol:     function(col) { dispatch(actions.setSortCol(col))}
    };
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(TableView);
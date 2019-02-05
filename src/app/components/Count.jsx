var React = require('react');
var ReactRedux = require("react-redux");
import * as actions from "../reducers/table/actions";

class Query extends React.Component {

    handleSelect = (e) => {
            this.props.setCount(this.refs.countSelect.value); 
    }

    render() {      
        return (
            <div className="col-sm-1">
                <select className="form-control" ref="countSelect" onChange={this.handleSelect} >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                </select>
            </div>
        )
   }
}

var mapStateToProps = function(state, ownProps) {
    return {};
};

var mapDispatchToProps = function(dispatch){
	return {
        setCount:     function(count) { dispatch(actions.setCount(count))}
    };
};

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Query);
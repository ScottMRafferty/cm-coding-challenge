var React = require('react');
var ReactRedux = require("react-redux");
import * as actions from "../reducers/table/actions";

class Query extends React.Component {

    handleQuerySubmit = (e) => {
        var keypressed = e.keyCode || e.which;
        if (keypressed === 13) {
            this.props.setQuery(this.refs.queryField.value);
        }
        
    }

    render() {      
        return (
            <div className="col-sm-3">
                <input className="form-control" type="text" placeholder="Search data..." ref="queryField" onKeyPress={this.handleQuerySubmit} />
            </div>
        )
   }
}

var mapStateToProps = function(state, ownProps) {
    return {};
};

var mapDispatchToProps = function(dispatch){
	return {
        setQuery:     function(query) { dispatch(actions.setQuery(query))}
    };
};

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Query);
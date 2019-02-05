var React = require('react');
var ReactRedux = require("react-redux");
import * as actions from "../reducers/table/actions";

const PaginationButton = (props) => {
  if (props.disabled === true) {
      return (
        <li className="disabled">
          <a href="#" aria-label={props.title}>
          <span aria-hidden="true">{props.title}</span>
        </a>
      </li>
      )
  } else {
    return (
        <li>
          <a href="#" aria-label={props.title} onClick={props.setStart}>
          <span aria-hidden="true">{props.title}</span>
        </a>
      </li>
    )
  }
  
}

const Pagination = (props) => {

    let totalPages = Math.ceil(props.total / props.count);
    let currentPage = (props.start / props.count) + 1;

    let previousNode = <PaginationButton disabled={currentPage === 1} title="Previous" setStart={()=>props.setStart(props.start - props.count)} />;
    let nextNode = <PaginationButton disabled={currentPage === totalPages} title="Next" setStart={()=>props.setStart(props.start + props.count)}/>;

   return (
        <nav aria-label="Page navigation" className="col-sm-8" style={{textAlign: 'right'}}>
  <ul className="pagination" style={{margin: '0px'}}>
    {previousNode}
    <li className="disabled"><span>Page {currentPage} of {totalPages}</span></li>
    {nextNode}
  </ul>
</nav>
   )

}

var mapStateToProps = function(state, ownProps) {
    return {};
};

var mapDispatchToProps = function(dispatch){
	return {
        setStart:     function(start) { dispatch(actions.setStart(start))}
    };
};

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Pagination);
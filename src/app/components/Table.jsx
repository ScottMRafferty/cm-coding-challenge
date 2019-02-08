var React = require('react');
import TableRow from '../components/TableRow';

const Table = (props) => {

    if (props.isFetching === true)
        return <h4>Fetching data...</h4>;

    // If there is no data then let the user know
    if (props.data.length < 1)
        return <h1>No results.</h1>

    // Simple sort icon node
    let sortIconNode = <span className={props.sort_asc===true?"glyphicon glyphicon-menu-down" : "glyphicon glyphicon-menu-up"} />;

    // Calculate a dynamic table header based on properties of first returned element - assuming
    // each record contains all properties for this test example so no need to iterate the set
    let columns = Object.keys(props.data[0]).map(e=>e);
    let columnNodes = columns.map((e,i)=><th key={i} onClick={()=>props.setSortCol(e)}>{e.toUpperCase()} {props.sort_col === e?sortIconNode:null}</th>);
    let tableHeaderNode = <tr>{columnNodes}</tr>;

    // Build the row item node array
    let tableRowItemNodes = props.data.map((e,i)=><TableRow key={i} columns={columns} data={e} />);

    return (
        <table className="table table-condensed table-bordered table-striped">
            <thead>
                {tableHeaderNode}
            </thead>
            <tbody>
                {tableRowItemNodes}
            </tbody>
        </table>
    )
}

export default Table;
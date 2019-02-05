var React = require('react');

const TableRow = (props) => {

    let cellNodes = props.columns.map((e,i)=><td key={i}>{props.data[e]}</td>);
    return <tr>{cellNodes}</tr>;

}

export default TableRow;
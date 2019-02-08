var React = require('react');

const TableRow = (props) => {

    let cellNodes = props.columns.map(function(e,i) {
        let val = props.data[e];

        // Next block is cosmetic and only performed on the final filtered, sorted displayed subset of
        // data - possibility to move to the selector if serious about integrating - quickly added - remove block if not required
        if (typeof props.query !== typeof undefined) {
            let queryPos = val.toLowerCase().indexOf(props.query.toLowerCase());
            if (queryPos > -1)
                return <td key={i}><span>{val.substring(0, queryPos)}<mark><b>{val.substring(queryPos, queryPos + props.query.length)}</b></mark>{val.substring(queryPos+props.query.length,val.length)}</span></td>;
        }

        // The default return for this function
        return <td key={i}>{val}</td>
    });

    return <tr>{cellNodes}</tr>;

}

export default TableRow;
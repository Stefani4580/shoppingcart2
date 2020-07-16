import React from 'react'

function LineItem(props) {

    return (
     
        <div>
            <table className="itemTable">
                <tr>
                    <th>Name</th>
                    <th>Cost</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>{props.name}</td>
                    <td>{props.cost}</td>
                    <td>{props.quantity}</td>
                </tr>
            </table>
        </div>
    )
}

export default LineItem;


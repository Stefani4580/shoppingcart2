import React from 'react'

function LineItem(props) {

    return (
     
        <div>
            <div className="item">
                {/* pic from unsplashed  */}
                <img src={props.pic} alt=""/>
                <h3>{props.name}</h3>
                <h3>${props.cost}</h3>
                <h3>{props.quantity}</h3>
            </div>
            {/* <table className="itemTable">
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
            </table> */}
        </div>
    )
}

export default LineItem;


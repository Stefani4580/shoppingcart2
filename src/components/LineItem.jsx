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
        </div>
    )
}

export default LineItem;


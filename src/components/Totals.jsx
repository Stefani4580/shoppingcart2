import React from 'react'

function Totals(props) {
    return (
        <div className="totals">
            <h1>Subtotal: ${props.subtotal.toFixed(2)}</h1>
            <h1>Tax (8%): ${props.tax.toFixed(2)}</h1>
            <h1>Total:  ${props.total.toFixed(2)}</h1>
        </div>
    )
}

export default Totals

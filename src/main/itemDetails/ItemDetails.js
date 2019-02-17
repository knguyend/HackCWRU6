import React from 'react'

const ItemDetails = ({ match }) => {
    return (
        <h1>
            This is detail of item {match.params.id}
        </h1 >
    )
        
}

export default ItemDetails;
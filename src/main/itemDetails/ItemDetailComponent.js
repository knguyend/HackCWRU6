import React from 'react';
import './ItemDetails.css';

const ItemDetailComponent = ({ data }) => {
    console.log(data.title);
    return (
        <div className="grid-container">
            <div className="Photo"> <img src={data.photoURL} alt={data.title}/> </div>
            <div className="Description">
                <h2>{data.title}</h2>
                <p>{data.description}</p>
            </div>  
            <div className="Contact"><h2>Contact</h2>
                <p>{data.ownerId}</p>
            </div>

        </div>
    )
};

export default ItemDetailComponent;
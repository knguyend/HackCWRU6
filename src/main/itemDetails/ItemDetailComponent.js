import React from 'react';
import Contacts from './Contacts';
import {Link} from 'react-router-dom';
import './ItemDetails.css';

const firebase = window.firebase;

const ItemDetailComponent = ({ data }) => {
  return (
    <div className="grid-container">
      <div className="Photo">
        {' '}
        <img src={data.photoURL} alt={data.title} />{' '}
      </div>
      <div className="Description">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
      <div className="Contact">
        <h2>Contact</h2>
        {firebase.auth().getUid() ? (
          <Contacts data={data} />
        ) : (
          <p>
            <Link to="/sign-in">Sign In</Link> or{' '}
            <Link to="/sign-up">Sign Up</Link> to see contact information
          </p>
        )}
      </div>
    </div>
  );
};

export default ItemDetailComponent;

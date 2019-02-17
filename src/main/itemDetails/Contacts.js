import React from 'react';
import { FirestoreDocument } from 'react-firestore';

const Contacts = ({ data }) => (
  <FirestoreDocument
    path={`users/${data.ownerId}`}
    render={({ isLoading, data: owner }) => {
      if (!isLoading) {
        const number = owner.contacts;
        const name = owner.firstName + ' ' + owner.lastName;
        const displayedNumber =
          '(' +
          number.substring(0, 3) +
          ') ' +
          number.substring(3, 6) +
          ' ' +
          number.substring(6);
        return (
          <div>
            <p>Owner: {name}</p>
            <p>Contact number: {displayedNumber}</p>
          </div>
        );
      } else return '';
    }}
  />
);

export default Contacts;

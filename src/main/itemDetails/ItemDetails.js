import React from 'react';
import { FirestoreDocument } from 'react-firestore';
import { Loading } from '../homepage/Items';

const ItemDetails = ({ match }) => {
  return (
    <FirestoreDocument
      path={`items/${match.params.id}`}
      render={({ isLoading, data }) => {
        console.log(data);
        return isLoading ? <Loading /> : <div data={data} />;
      }}
    />
  );
};

export default ItemDetails;

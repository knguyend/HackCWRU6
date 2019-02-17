import React from 'react';
import { FirestoreDocument } from 'react-firestore';
import { Loading } from '../homepage/Items';
import ItemDetailsComponent from './ItemDetailComponent'

const ItemDetails = ({ match }) => {
  return (
    <FirestoreDocument
      path={`items/${match.params.id}`}
      render={({ isLoading, data }) => {
        return isLoading ? <Loading /> : <ItemDetailsComponent data={data}/>;
      }}
    />
  );
};

export default ItemDetails;

import React from 'react';
import EachItem from './EachItem';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { FirestoreCollection } from 'react-firestore';

export const Loading = () => {
  return <div> Loading... </div>;
};

const Div = styled.div`
  height: 800px;
  background-color: rgba(75, 75, 250, 0.1);
  padding: 0px;
  margin: 0px;
  min-width: 815px;
  ul {
    display: flex;
    flex-flow: row wrap;
    align-content: space-around;
    justify-content: center;
    height: 33%;
  }
`;

class Items extends React.Component {
  state = {
    items: []
  };

  storeItems = data => {
    const items = data.results
      .map(result => {
        const { id, photoUrl, title, description, condition, ownerId } = result;
        return { id, photoUrl, title, description, condition, ownerId };
      })
      .slice(0, 9);
    this.setState({ items });
  };

  redirect = item => {
    console.log('redirect to ' + item.id);
    return <Redirect to={`item/${item.id}`} push />;
  };

  render() {
    return (
      <FirestoreCollection
        path="items"
        filter={
          this.props.searchKey
            ? ['title', '==', this.props.searchKey]
            : undefined
        }
        render={({ isLoading, data }) => {
          return isLoading ? (
            <Loading />
          ) : (
            <Div>
              <ul className="items">
                {data.slice(0, 3).map(item => (
                  <EachItem key={item.id} item={item} onClick={this.redirect} />
                ))}
              </ul>
              <ul className="items">
                {data.slice(3, 6).map(item => (
                  <EachItem key={item.id} item={item} onClick={this.redirect} />
                ))}
              </ul>
              <ul className="items">
                {data.slice(6, 9).map(item => (
                  <EachItem key={item.id} item={item} onClick={this.redirect} />
                ))}
              </ul>
            </Div>
          );
        }}
      />
    );
  }
}

export default Items;

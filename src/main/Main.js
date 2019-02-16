import React from 'react';
//import "./Main.css"
import Items from './homepage/Items';
import styled from 'styled-components';

class Main extends React.Component {
  state = {
    searchKey: ''
  };

  setItems = searchKey => {
    this.setState({ searchKey });
  };

  onSearchButtonClick = event => {
    this.setState({ searchKey: event.target.value });
  };

  render() {
    return (
      <section className="main">
        <Items searchKey={this.state.searchKey} />
      </section>
    );
  }
}

export default Main;

import React from 'react';
//import "./Main.css"
import Items from './homepage/Items';
import styled from 'styled-components';

class Main extends React.Component {
  render() {
    return (
      <section className="main">
        <Items searchKey={this.props.searchKey} />
      </section>
    );
  }
}

export default Main;

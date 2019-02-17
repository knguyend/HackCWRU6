import React from 'react';
//import "./Main.css"
import Items from './Items';
import ProductPitch from './ProductPitch';
import styled from 'styled-components';

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Items searchKey={this.props.searchKey} />
        <ProductPitch />
      </div>
    );
  }
}

export default Main;

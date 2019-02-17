import React from 'react';
//import "./Main.css"
import Items from './homepage/Items';
import styled from 'styled-components';

const Main = props => {
  return (
    <section className="main">
      <Items searchKey={props.searchKey} />
    </section>
  );
};

export default Main;

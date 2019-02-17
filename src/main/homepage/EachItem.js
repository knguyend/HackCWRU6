import React from 'react';
//import "./EachItem.css";
import guitar from './guitar.png';
import styled from 'styled-components';

const Li = styled.li`
  list-style-type: none;
  height: 33%;
  width: 33%;

  .item-wrapper {
    border: 3px solid green;
    height: 100%;
  }

  .imgDiv {
    height: 67%;
    background-image: url(${props => {console.log(props); return props.url}});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .item-info {
    height: 33%;
  }

  h2 {
    margin: 0px;
    font-size: 2em;
  }
`;

const EachItem = ({ item }) => {
  const { id, title, description, photoURL, condition, ownerId } = item;

  return (
    <Li url={photoURL} className="item">
      <div className="item-wrapper">
        <div className="imgDiv" />
        <div className="item-info">
          <h2>{title}</h2>
          <span className="description">{description}</span>
          <br />
          <span className="condition">Condition: {condition}</span>
        </div>
      </div>
    </Li>
  );
};

export default EachItem;

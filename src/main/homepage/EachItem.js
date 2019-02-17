import React from 'react';
//import "./EachItem.css";
import guitar from './guitar.png';
import styled from 'styled-components';

const Li = styled.li`
  list-style-type: none;
  height: 90%;
  width: 30%;
  max-width: 300px;
  margin: 10px;
  background: linear-gradient(
    hsla(104, 28%, 36%, 0.35),
    hsla(104, 28%, 26%, 0.5)
  );

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
    display: inline-block;
    margin: 0px;
    font-size: 2em;
    font-weight: bold;
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
          <br />
          <span className="description">
            {description} / {condition}
          </span>
        </div>
      </div>
    </Li>
  );
};

export default EachItem;

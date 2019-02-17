import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

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
  box-shadow: 3px 4px 16px black;
  text-align: center;
  cursor: pointer;
  font-size: 100%;
  overflow: auto;

  .item-wrapper {
    border: 3px solid green;
    height: 100%;
  }

  .imgDiv {
    height: 67%;
    background-image: url(${props => props.url}});
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

class EachItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  handleOnClick = () => {
    this.setState({ redirect: true });
  };

  handleMouseDown = e => {
    const target = e.target;
    const results = document.querySelectorAll('.item');
    results.forEach(node => {
      if (node.contains(target)) {
        node.style.boxShadow = '3px 3px 8px black';
        node.style.background =
          'linear-gradient(hsla(104, 28%, 36%, 0.5), hsla(104,28%,26%,0.75) )';
      }
    });
  };

  handleMouseUp = e => {
    const target = e.target;
    const results = document.querySelectorAll('.item');
    results.forEach(node => {
      if (node.contains(target)) {
        node.style.boxShadow = '3px 4px 16px black';
        node.style.background =
          'linear-gradient(hsla(104, 28%, 36%, 0.25), hsla(104,28%,26%,0.5) )';
      }
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={`item/${this.props.item.id}`} push />;
    }

    const {
      id,
      title,
      description,
      photoURL,
      condition,
      ownerId
    } = this.props.item;
    return (
      <Li
        url={photoURL}
        className="item"
        onClick={this.handleOnClick}
        onMouseDown={this.handleMouseDown.bind(this)}
        onMouseUp={this.handleMouseUp}
      >
        <div className="item-wrapper">
          <div className="imgDiv" />
          <div className="item-info">
            <h2>{title}</h2>
            <br />
            <p className="description">
              {description} / <em>{condition} condition</em>
            </p>
          </div>
        </div>
      </Li>
    );
  }
}

export default EachItem;

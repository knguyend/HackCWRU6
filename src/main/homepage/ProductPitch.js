import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin: 15px;

  h1 {
    color: green;
    text-align: center;
    text-shadow: 2px 2px 2px lightblue;
    font-weight: bold;
  }
`;

const ProductPitch = props => {
  return (
    <Div className="productpitch">
      <h1>Have Something You Don't Need?</h1>
      <h4>Need something you don't have?</h4>
      <br />
      <p>
        Twine is a way to donate your stuff to students on your campus that
        might need it and get things for yourself.{' '}
        <a href="/sign-up">Sign up here</a>
      </p>
    </Div>
  );
};

export default ProductPitch;

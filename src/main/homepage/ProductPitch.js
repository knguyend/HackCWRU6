import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin: 15px;

  h1 {
    color: green;
    text-shadow: 2px 2px 2px lightblue;
    font-weight: bold;
  }

  h1,
  h4 {
    text-align: center;
  }
`;

const ProductPitch = props => {
  return (
    <Div className="productpitch">
      <h1>Have Something You Don't Need?</h1>
      <h4>Or do you need something you don't have?</h4>
      <br />
      <p>
        Twine is a way to donate your stuff to other students on campus that
        might need it. You can also look for things you need yourself. We
        believe that people and communites are stronger when they support each
        other. <a href="/sign-up">Sign up here</a>
      </p>
    </Div>
  );
};

export default ProductPitch;

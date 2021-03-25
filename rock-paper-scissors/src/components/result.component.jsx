import React from 'react';
import styled from 'styled-components';

const result = (props) => (
  <Result>
      {props.content}
  </Result>
);

const Result = styled.div`
white-space: pre-wrap;
    margin: auto;
    text-align: center;
    grid-area: result;
    font-family: 'Press Start 2P', cursive;
    color: white;
`;

export default result;

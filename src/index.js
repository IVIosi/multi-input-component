import React from 'react';
import ReactDOM from 'react-dom';
import MultiInput from './multi-input';
import './styles/main.scss';

ReactDOM.render(
  <MultiInput
    name="test attribute"
    title="Test"
    onChange={(values) => console.log(values)}
  />,
  document.getElementById('root'),
);

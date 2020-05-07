import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './styles/main.scss';

ReactDOM.render(<App onChange={values => console.log(values)}/>, document.getElementById('root'));

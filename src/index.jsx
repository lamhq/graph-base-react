import React from 'react';
import ReactDOM from 'react-dom';
import { setConfig } from 'react-hot-loader';
import App from './App';

setConfig({
  ignoreSFC: true, // this will fix hook
});

ReactDOM.render(<App />, document.getElementById('root'));

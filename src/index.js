import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { Provider } from 'react-redux';
import store from './components/helpers/store'

// setup fake backend
import { configureFakeBackend } from './components/helpers/fake-backend';
configureFakeBackend();

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import Container from './Container';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import app from './reducers'

let store = createStore(app);

ReactDOM.render(
    <Provider store={store}>
        <Container/>
    </Provider>, document.getElementById('root'));

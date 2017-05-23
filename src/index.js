import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// import 'semantic-ui-css/semantic.min.css';

import App from './app.js';
import store from './store';

const elem = document.getElementById('app');


render(
    <Provider store={store}>
        <App/>
    </Provider>
    , elem
);

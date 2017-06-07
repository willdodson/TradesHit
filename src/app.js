import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppContainer from './containers/app_container.container';
import SymHeader from './containers/header.container';
import SymFooter from './containers/footer.container';
require('./assets/css/section.css');

const dummyUser = {
    name: 'Gaurav Gupta',
    profilePic: null
};

export default class App extends React.Component {
    render () {
        return (
                <Router>
                    <div>
                        <SymHeader></SymHeader>
                        <AppContainer></AppContainer>
                        <SymFooter></SymFooter>
                    </div>
                </Router>
        )
    }
}
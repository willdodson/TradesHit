import React from 'react';

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
            <div>
                <SymHeader user={dummyUser}></SymHeader>
                <AppContainer></AppContainer>
                <SymFooter></SymFooter>
            </div>
        )
    }
}
import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import LandingPage from './landing_page.container';
import SymBreadCrumb from '../components/breadcrum.component';
import { Menu, Card, Icon, Image, Grid } from 'semantic-ui-react';
import SysAdvertisementBanner from '../components/advertisement.component';

export default class AppContainer extends React.Component {
    render() {
        return (
            <Router>
                <div>   
                    <SysAdvertisementBanner> </SysAdvertisementBanner>
             
                    <Grid columns={4}>
                        <Grid.Column width={1}> </Grid.Column>
                        <Grid.Column width={14}>
                            <SymBreadCrumb />
                            <Route exact path="/" component={LandingPage}></Route>                
                        </Grid.Column>
                        <Grid.Column width={2}></Grid.Column>
                        <Grid.Column width={1}></Grid.Column>
                    </Grid>
               </div> 
            </Router>
        );
    }
}
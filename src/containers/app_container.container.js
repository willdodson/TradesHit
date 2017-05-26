import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import LandingPage from './landing_page.container';
import SymBreadCrumb from '../components/breadcrum.component';
import { Menu, Card, Icon, Image, Grid } from 'semantic-ui-react';
import SysAdvertisementBanner from '../components/advertisement.component';
import SymSection from './section.container';
import SymProducDetail from './product_detail.container';

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
                            <Route path="/sections/:name" component={SymSection}></Route>
                            <Route path="/item/:name" component={SymProducDetail} />             
                        </Grid.Column>
                        <Grid.Column width={2}></Grid.Column>
                        <Grid.Column width={1}></Grid.Column>
                    </Grid>
               </div> 
            </Router>
        );
    }
}
import React from 'react';
import { BrowserRouter as Router, Link, Route, Redirect, Switch } from 'react-router-dom';
import LandingPage from './landing_page.container';
import SymBreadCrumb from '../components/breadcrum.component';
import { Menu, Card, Icon, Image, Grid } from 'semantic-ui-react';
import SysAdvertisementBanner from '../components/advertisement.component';
import SymSection from './section.container';
import SymProducDetail from './product_detail.container';
import SymProfile from '../components/profile.component';
import SymRoute from '../components/custom_route.component';
import ProtectedRoute from '../components/withAuth.component';
import SymBuyNow from './buy_now.container';
import { AccessTokenFactory } from '../utils/index'; 

let isAuthenticated = (wrappedComponent) => {
    return (props) => {
        const hasToken = AccessTokenFactory().getToken();
        return (
            hasToken ?
            <Route path='/profile' component={wrappedComponent} />:
            <Redirect to='/' />

        );
    }
};
export default class AppContainer extends React.Component {
    render() {
        return (
                <div>   
                    <SysAdvertisementBanner> </SysAdvertisementBanner>
             
                    <Grid columns={4}>
                        <Grid.Column width={1}> </Grid.Column>
                        <Grid.Column width={14}>
                            <Route path="/" component={SymBreadCrumb} />
                            <Route exact path="/" component={LandingPage}></Route>
                            <Route path="/sections/:name" component={SymSection}></Route>
                            <Switch>
                                <Route path="/item/:name/buy_now" component={SymBuyNow}/>                                                                                     
                                <Route path="/item/:name" component={SymProducDetail} />
                            </Switch>
                            <Route path="/profile" component={isAuthenticated(SymProfile)} />
                        </Grid.Column>
                        <Grid.Column width={2}></Grid.Column>
                        <Grid.Column width={1}></Grid.Column>
                    </Grid>
               </div> 
        );
    }
}
import React from 'react';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';
import LandingPage from './landing_page.container';
import SymBreadCrumb from '../components/breadcrum.component';
import { Menu, Card, Icon, Image, Grid } from 'semantic-ui-react';
import SysAdvertisementBanner from '../components/advertisement.component';
import SymSection from './section.container';
import SymProducDetail from './product_detail.container';
import SymProfile from '../components/profile.component';
import SymRoute from '../components/custom_route.component';
import ProtectedRoute from '../components/withAuth.component';

// function withAuth(component) {
//     return <component />
// }

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
                            <Route path="/item/:name" component={SymProducDetail} />
                            <Route path="/profile" component={SymProfile} />
                                                                                                                
                            {
                            //  <ProtectedRoute path="/profile" component={SymProfile}/>
                            }
                        </Grid.Column>
                        <Grid.Column width={2}></Grid.Column>
                        <Grid.Column width={1}></Grid.Column>
                    </Grid>
               </div> 
        );
    }
}
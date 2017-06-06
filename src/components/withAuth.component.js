import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import store from '../store';
import SymLoader from './loader.component';

function isAuthenticated (user) {

    return !!(user && user.meta.isLoggedIn);    
}

class Auth extends React.Component{
    render() {
        const WrappedComponent = this.props.wrappedComponent;
        return (
            <WrappedComponent { ...this.props }/>
        );
    }
}
const AuthComp = connect((state) => {
    return {
        user: state.user
    }
})(Auth);

// Bug: Steps to reproduce
// 1. If user is on protected URL and is not logged in. User will see "You are not logged in".
// 2. Then user tries to login (with the login Modal). Now, after successful login, the underlying page (Protected page) should be shown, since user has just logged in.
// Root Cause:
// Since, ProtectedRoute does not listens to the State changes(in order to protect the reference of supplied path and components)
// So, 
class ProtectedRoute extends React.Component {

    constructor(props){
        super(props);
        this.WrappedComponent = this.props.component;
    }

    isAuthenticate = () => {
        return !!(this.props.user && this.props.user.meta.isLoggedIn);
    }

    render() {
        console.log('XY AuthenticatedComponent#render');
        const WrappedComponent = this.props.component;
        let routeProps = { ...this.props };
        delete routeProps.component;
        const user = this.props.user;
        // return (
        //     <Route { ...routeProps} component={AuthComp} />
        // )
        return (
            <Route { ...routeProps } 
                render = { props => {
                    console.log('XY AnonymousRoute#render', user);
                    if(isAuthenticated(user)){
                        return <WrappedComponent { ...props }/>
                    }else{
                        return <Redirect to="/"/>
                        // return <h2> You are not logged in.</h2>
                    }
                }}
            />
        )
    }
    
}

const mapStateToProps = (state) => {
        return {
            user: state.user
        }
    }
export default connect(mapStateToProps)(ProtectedRoute);
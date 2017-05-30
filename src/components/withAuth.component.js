import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import store from '../store';

function isAuthenticated (user) {
    return !!(user && user.meta.isLoggedIn);    
}

// Bug: Steps to reproduce
// 1. If user is on protected URL and is not logged in. User will see "You are not logged in".
// 2. Then user tries to login (with the login Modal). Now, after successful login, the underlying page (Protected page) should be shown, since user has just logged in.
// Root Cause:
// Since, ProtectedRoute does not listens to the State changes(in order to protect the reference of supplied path and components)
// So, 
export default class ProtectedRoute extends React.Component {

    isAuthenticate = () => {
        return !!(this.props.user && this.props.user.meta.isLoggedIn);
    }

    render() {
        console.log('XY AuthenticatedComponent#render', this.props);
        const WrappedComponent = this.props.component;
        const routeProps = { ...this.props, component: null };
        const user = store.getState().user;
        return (
            <Route { ...routeProps } 
                render = { props => {
                    console.log('XY AnonymousRoute#render', user);
                    if(isAuthenticated(user)){
                        return <WrappedComponent { ...props } />
                    }else{
                        return <Redirect to="/"/>
                        // return <h2> You are not logged in.</h2>
                    }
                }}
            />
        )
    }
    
}

// const mapStateToProps = (state) => {
//         return {
//             user: state.user
//         }
//     }
// export default connect(mapStateToProps)(ProtectedRoute);
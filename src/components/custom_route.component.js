import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';

class SymRoute extends React.Component {
    constructor(props){
        super(props);
    }

    isAuthenticated = () => {
        return !!(this.props.user && this.props.user.meta.isLoggedIn);
    }
    
    isUserAuthenticated = () => {
        if(this.props.authenticated){
            // If auth scheme is required, check authenticity
            return !!this.isAuthenticated();
        } 
        return true;
    }

    render() {
        if(this.props.path != window.location.pathname){
            return null;
        }
        console.log('Route - >', this.props, window.location);
        if(this.isUserAuthenticated()){
            return (<div> You are not logged in </div>)
        }
        return <Route path={this.props.path} component={this.props.component} />
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(SymRoute);

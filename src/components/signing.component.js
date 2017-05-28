import React from 'react';
import { connect } from 'react-redux'; 
import { Modal, Header, Button, Image } from 'semantic-ui-react';
import LoginForm from './login_form.component';
import SignupForm from './sign_up_form.component';
import { signup, signin } from '../actions/signing.actions';
import AccountDropDown from './account_dropdown.component';

const Label = {
    color: 'white',
    display: 'inline-block',
    padding: '2px 5px 2px 5px',
    cursor: 'pointer'
}, SigningStyles = {
    GreetingLabel: { ...Label },
    SignUpLabel: { ...Label },
    LoginLabel: { ...Label }
}

class SymSigningModal extends React.Component {
    constructor(props) {
        super(props);
    }

    signUpHandler = (userInputs) => {
        console.log('Signup input are -> ', userInputs);
        this.props.dispatch(signup(userInputs));
    }

    signInHandler = (userInputs) => {
        console.log('User input are -> ', userInputs);
        this.props.dispatch(signin(userInputs));
    }

    render() {
        const user = this.props.user;
        if(user && user.meta.isLoggedIn){
            return (
                <div>
                    <AccountDropDown user={user}/>
                </div>
            )
        }

        return (
            <div>
                <Modal trigger={<p style={SigningStyles.GreetingLabel}> Login </p>}>
                    <Modal.Header>Existing User - Login here</Modal.Header>
                    <Modal.Content image>
                        <Image wrapped size='medium' src='../assets/images/login_icon.png' />
                        <Modal.Description>
                            <LoginForm signInHandler={this.signInHandler}/>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
                <Modal trigger={<p style={SigningStyles.SignUpLabel}> Signup </p>}>
                    <Modal.Header>New User - Sign-up here</Modal.Header>
                    <Modal.Content image>
                        <Image wrapped size='medium' src='../assets/images/login_icon.png' />
                        <Modal.Description>
                            <SignupForm signUpHandler={this.signUpHandler}/>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
           </div> 
        );
    }
}
const mapStateToProps = state => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(SymSigningModal);
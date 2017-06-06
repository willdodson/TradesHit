import React from 'react';
import { Form, Button } from 'semantic-ui-react';
const LoginFormAttributes = {
    Email: {
        inputName: 'email'
    },
    Password: {
        inputName: 'password'
    }
}

const initialState = {
    email: '',
    password: ''
}

export default class LoginForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = { ...initialState };
    }
    
    _handler = (e, data) => {
        e.preventDefault();
        this.props.signInHandler({
            email: this.state.email,
            password: this.state.password
        });
    }

    handleChange = (e, name) => {
        e.preventDefault();
        switch(name){
            case LoginFormAttributes.Email.inputName:
                this.setState({ email: e.target.value });
                break;
            case LoginFormAttributes.Password.inputName:
                this.setState({ password: e.target.value });
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <Form>
                <div>
                    <Form.Field>
                    <label>Username/email</label>
                    <input placeholder='Enter your username or email' 
                            value={this.state.email} 
                            onChange={(e) => this.handleChange(e, LoginFormAttributes.Email.inputName)}
                            name={LoginFormAttributes.Email.inputName}/>
                    </Form.Field>
                    <br />

                    <Form.Field>
                    <label>Password</label>
                    <input placeholder='Your password goes here' 
                            value={this.state.password}
                            onChange={(e) => this.handleChange(e, LoginFormAttributes.Password.inputName)}
                            name={LoginFormAttributes.Password.inputName}/>
                    </Form.Field>
                    <br />

                    <Button onClick={(e, data) => {this._handler(e, data)}}>Submit</Button>
                </div>
            </Form>
        );
    }
}
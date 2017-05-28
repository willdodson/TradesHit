import React from 'react';
import { Form, Button } from 'semantic-ui-react';
const LoginFormAttributes = {
    UserName: {
        inputName: 'user_name'
    },
    Password: {
        inputName: 'password'
    }
}

const initialState = {
    userName: '',
    password: ''
}

export default class LoginForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = { ...initialState };
    }
    
    _handler = (e, data) => {
        this.props.signInHandler({
            username: this.state.username,
            password: this.state.password
        });
    }

    handleChange = (e, name) => {
        e.preventDefault();
        switch(name){
            case LoginFormAttributes.UserName.inputName:
                this.setState({ username: e.target.value });
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
            <div>
                <div>
                    <Form.Field>
                    <label>Username/email</label>
                    <input placeholder='Enter your username or email' 
                            value={this.state.username} 
                            onChange={(e) => this.handleChange(e, LoginFormAttributes.UserName.inputName)}
                            name={LoginFormAttributes.UserName.inputName}/>
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
            </div>
        );
    }
}
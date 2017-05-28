import React from 'react';
import { Form, Button, Checkbox } from 'semantic-ui-react';

const SignUpFormAttributes = {
        FirstName: {
            inputName: 'first_name'
        },
        LastName: {
            inputName: 'last_name'
        },
        UserName: {
            inputName: 'user_name'
        },
        Password: {
            inputName: 'password'
        }},
    initialState = {
        firstName: '',
        lastName: '',
        userName: '',
        password: ''
}

export default class SignUpForm extends React.Component {
    
    _handler = (e, data) => {
        const userInputs = {}
        this.props.signUpHandler({
            userName: this.state.userName,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        });
    }

    constructor(props) {
        super(props);
        this.state = { ...initialState };
    }

   handleChange = (e, name) => {
        switch(name){
            case SignUpFormAttributes.FirstName.inputName:
                this.setState({ firstName: e.target.value });
                break;
            case SignUpFormAttributes.LastName.inputName:
                this.setState({ lastName: e.target.value });
                break;
            case SignUpFormAttributes.UserName.inputName:
                this.setState({ userName: e.target.value });
                break;
            case SignUpFormAttributes.Password.inputName:
                this.setState({ password: e.target.value });
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <Form>
                <Form.Field>
                <label>First Name</label>
                <input placeholder='Your first name' 
                        onChange={(e) => this.handleChange(e, SignUpFormAttributes.FirstName.inputName)}
                        name={SignUpFormAttributes.FirstName.inputName}/>
                </Form.Field>

                <Form.Field>
                <label>Last Name</label>
                <input placeholder='Your last name' 
                        onChange={(e) => this.handleChange(e, SignUpFormAttributes.LastName.inputName)}
                        name={SignUpFormAttributes.LastName.inputName}/>
                </Form.Field>

                <Form.Field>
                <label>Username/email</label>
                <input placeholder='Enter your username or email' 
                        onChange={(e) => this.handleChange(e, SignUpFormAttributes.UserName.inputName)}
                        name={SignUpFormAttributes.UserName.inputName}/>
                </Form.Field>

                <Form.Field>
                <label>Password</label>
                <input placeholder='Your password goes here' 
                        onChange={(e) => this.handleChange(e, SignUpFormAttributes.Password.inputName)}
                        name={SignUpFormAttributes.Password.inputName}/>
                </Form.Field>

                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>

                <Button onClick={ (e, data) => this._handler(e, data)}>Submit</Button>
            </Form>
        );
    }
}
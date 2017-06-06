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
        },
        Email: {
            inputName: 'email'
        }
    
    },
    initialState = {
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
        email: ''
}

export default class SignUpForm extends React.Component {
    
    _handler = (e, data) => {
        e.preventDefault();
        const userInputs = {}
        this.props.signUpHandler({
            // userName: this.state.userName,
            email: this.state.email,
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
            case SignUpFormAttributes.Email.inputName:
                this.setState({ email: e.target.value });
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
                <br/>
                <Form.Field>
                <label>Last Name</label>
                <input placeholder='Your last name' 
                        onChange={(e) => this.handleChange(e, SignUpFormAttributes.LastName.inputName)}
                        name={SignUpFormAttributes.LastName.inputName}/>
                </Form.Field>
                <br/>

                <Form.Field>
                <label>Email</label>
                <input placeholder='Enter your email' 
                        onChange={(e) => this.handleChange(e, SignUpFormAttributes.Email.inputName)}
                        name={SignUpFormAttributes.Email.inputName}/>
                </Form.Field>
                <br/>

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
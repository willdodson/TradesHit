import React from 'react';
import { connect } from 'react-redux';
import { Grid, Input, Button, Segment, Label } from 'semantic-ui-react';
import CommonStyles from '../constants/common.styles';
import { updateProfile } from '../actions/signing.actions';

const labelConfig = {
    tag: true,
    labelPosition: 'left',
    color: 'teal'
},
    ProfileStyles = {
        BasicInfo: {
            Input: {
                margin: '10px 100px 10px'
            }
        }
    }

class SymProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = { user: { ...this.props.user }};
    }

    _handleChange = (e, name) => {
        switch(name){
            case "First Name": 
                this.setState({ user: { ...this.state.user, firstName: e.target.value} });
                break;
            case "Last Name":
                this.setState({ user: { ...this.state.user, lastName: e.target.value } });
                break;
            case "Street":
                this.state.user.address.street = e.target.value;
                this.setState({ user: { ...this.state.user } });
                break;
            case "City":
                this.state.user.address.city = e.target.value;
                this.setState({ user: { ...this.state.user } });
                break;
            case "Pincode":
                this.state.user.address.pincode = e.target.value;
                this.setState({ user: { ...this.state.user } });
                break;
            default:
                break;
        }
    }

    onSaveButtonClick = (e, data) => {
        e.preventDefault();
        this.props.dispatch(updateProfile(this.state.user))
    }

    componentWillReceiveProps(nextProps){
        this.setState({ user: { ...nextProps.user } });
    }

    render() {
        const user = this.state.user;
        return (
                <div>
                    <Segment.Group horizontal>
                        <Segment raised>
                            <Label as='a' color='red' ribbon>Basic Info</Label>
                            <div style={ProfileStyles.BasicInfo.Input}>
                                <Input
                                    onChange={(e, data) => this._handleChange(e, "First Name")}
                                    value={ user.firstName }
                                    labelPosition={labelConfig.labelPosition} 
                                    label={{ ...labelConfig, content: 'First Name' }}
                                />
                            </div>
                            <div style={ProfileStyles.BasicInfo.Input}>
                                <Input
                                    onChange={(e, data) => this._handleChange(e, "Last Name")}
                                    value={ user.lastName }
                                    labelPosition={labelConfig.labelPosition} 
                                    label={{ ...labelConfig, content: 'Last Name' }}
                                />
                            </div>
                        </Segment>
                        <Segment raised>
                            <Label as='a' color='red' ribbon>Email</Label>
                            <div style={ProfileStyles.BasicInfo.Input}>
                                <Input
                                    onChange={(e, data) => this._handleChange(e, "Street")}
                                    value={ user.address.street }
                                    labelPosition={labelConfig.labelPosition} 
                                    label={{ ...labelConfig, content: 'Street' }}
                                />
                            </div>
                            <div style={ProfileStyles.BasicInfo.Input}>
                                <Input
                                    onChange={(e, data) => this._handleChange(e, "City")}
                                    value={ user.address.city }
                                    labelPosition={labelConfig.labelPosition} 
                                    label={{ ...labelConfig, content: 'City' }}
                                />
                            </div>
                            <div style={ProfileStyles.BasicInfo.Input}>
                                <Input
                                    onChange={(e, data) => this._handleChange(e, "Pincode")}
                                    value={ user.address.pincode }
                                    labelPosition={labelConfig.labelPosition} 
                                    label={{ ...labelConfig, content: 'pincode' }}
                                />
                            </div>
                        </Segment>  
                    </Segment.Group>
                    <Segment textAlign="center">
                        <Button color={CommonStyles.primaryButtonColor}
                                loading={user.meta.isProcessing}
                                onClick={this.onSaveButtonClick}
                        >Save</Button>
                    </Segment>
                </div>
       );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(SymProfile);
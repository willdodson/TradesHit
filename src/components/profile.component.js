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
                this.setState({
                    user: { ...this.state.user, firstName: e.target.value}
                });
                break;
            case "Last Name":
                this.setState({
                    user: { ...this.state.user, lastName: e.target.value }
                });
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
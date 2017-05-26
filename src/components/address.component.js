import React from 'react';
import { connect } from 'react-redux';

import { Input, Icon, Header } from 'semantic-ui-react';
import CommonStyles from '../constants/common.styles';

class SymAddress extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inEditMode: !!this.props.user.address
        }
    }

    render() {
        return (
            <div>
                <Header as='h2' textAlign="center">
                    <Icon name='truck' />
                    <Header.Content> Shipping information</Header.Content>
                </Header>
                <Input
                    label={{ tag: true, content: this.state.inEditMode? 'Add your address': 'Ship on address', color:  this.state.inEditMode ? CommonStyles.labelPrimaryColor: CommonStyles.labelSecondaryColor}}
                    labelPosition='left'
                    disabled={!this.state.inEditMode}
                    placeholder='Add your address here.'
                    defaultValue={this.props.user.address}
                />
                <Icon name="edit" size="big" onClick={ e => {this.setState({inEditMode: !this.state.inEditMode})}}/> 
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(SymAddress)
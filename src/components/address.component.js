import React from 'react';
import { connect } from 'react-redux';

import { Input, Icon, Header, TextArea, Label } from 'semantic-ui-react';
import CommonStyles from '../constants/common.styles';


class SymAddress extends React.Component {

    constructor(props) {
        super(props);
        if(this.props.user && this.props.user.address){
            this.state = { 
                address: this.getConcatenatedAddress(this.props.user.address),
            };
        }else {
            this.state = { 
                address: this.getConcatenatedAddress(),
            };
        }
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({ address: this.getConcatenatedAddress(nextProps.user.address)});
    }

    getConcatenatedAddress = (address) => {
        if(address && address.city && address.street && address.pincode){
            return `${address.street},\n${address.city},\npincode - ${address.pincode} `;
        }
            return '';

    }


    render() {
        // console.log('Address is ->', address, 'State is', this.state.address);
        return (
            <div>
                <Header as='h4'>
                    <Icon name='truck' />
                    <Header.Content> 
                        Shipping information
                        <Header.Subheader>
                            Your item will be delivered here..
                        </Header.Subheader>
                    </Header.Content>
                </Header>
                <div>
                    <TextArea
                        autoHeight
                        value={this.state.address}
                        onChange={(e, data) => { this.setState({ address: e.target.value }) }}
                    />
                </div>
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
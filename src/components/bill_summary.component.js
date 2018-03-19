import React from 'react';
import { Icon, Button, Header, Segment, Input } from 'semantic-ui-react';
import CommonStyles from '../constants/common.styles';

const tax = 0.05;  // in percentage...
export default class SymBillSummary extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            qty: 1
        }
    }

    onQtyUpdated = (event, data) => {
        this.setState({qty: event.target.value});
    }

    getPriceDetails = (item) => {
        const itemsCost = parseFloat(item.price*this.state.qty);
        const taxAmount = parseFloat(tax*itemsCost);
        const total = itemsCost + taxAmount;
        const basePrice = item.price;
        return {
            total,
            taxAmount,
            basePrice,
            itemsCost
        }
    }

    render() {
        const priceInfo = this.getPriceDetails(this.props.item);
        return (
            <div>
                <Header as='h4'>
                    <Icon name='credit card alternative' />
                    <Header.Content>
                        Proposed Trade
                        <Header.Subheader>
                            My Proposition
                        </Header.Subheader>
                    </Header.Content>
                </Header>
                <div>
                    <Header sub> Item Name:
                        <Header.Content>
                        </Header.Content>
                    </Header>
                    <Header>
                        This is the trade I propose for your amazing soccer ball
                    </Header>
                </div>
            </div>
        );
    }
}
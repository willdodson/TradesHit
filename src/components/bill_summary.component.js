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
                        Billing Information
                    <Header.Subheader>
                        {`You will be charged `}
                        <Icon name="rupee"/>
                        {`${priceInfo.total} for`}
                        <Input type="number" 
                            transparent
                            value={this.state.qty} 
                            onChange={(e, data) => this.onQtyUpdated(e, data)}/>
                        { `item.`}

                    </Header.Subheader>
                    </Header.Content>
                </Header>
                <div>
                    <Header sub> #Items:
                        <Header.Content>
                        </Header.Content>
                    </Header>
                    <Header sub >Base Price: 
                        <Header.Content > 
                            <Icon name="rupee"/>
                            <span className='price'>{ priceInfo.basePrice }</span>
                        </Header.Content>
                    </Header>
                    <Header sub >Tax: 
                        <Header.Content > 
                            <Icon name="rupee"/>
                            <span className='price'>{ priceInfo.taxAmount }</span>                        
                        </Header.Content>
                    </Header>
                    <Header sub >Total: 
                        <Header.Content >
                            <Icon name="rupee"/>
                            <span className='price'>{ priceInfo.total }</span>                        
                        </Header.Content>
                    </Header>
                </div>
            </div>
        );
    }
}
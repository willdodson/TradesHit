import React from 'react';
import { Icon, Button, Item } from 'semantic-ui-react';
import CommonStyles from '../constants/common.styles';
import SymBuyNowBtn from './buy_now_btn.component';
import { withRouter } from 'react-router'

class SymBasketItem extends React.Component{

    render() {
        console.log('Basket items in basket item...', this.props.item);
        return (
            <Item>
                <Item.Image size='tiny' src='../../assets/images/product.jpg' />

                <Item.Content>
                    <Item.Header as='a'>{ this.props.item.displayName }</Item.Header>
                    
                    <Item.Description>
                        { this.props.item.description }
                    </Item.Description>
                    <Item.Extra>
                        <SymBuyNowBtn item={ this.props.item } 
                                      user={this.props.user}
                        />
                    </Item.Extra>
                </Item.Content>
            </Item>
        );
    }
}

export default withRouter(SymBasketItem);
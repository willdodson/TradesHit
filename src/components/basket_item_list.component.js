import React from 'react';
import { Item, Divider, Segment } from 'semantic-ui-react';
import CommonStyles from '../constants/common.styles';
import BasketItem from './basket_item.component';

export default class SymBasketItemList extends React.Component{

    render() {
        console.log('Watchlist...', this.props);
        return (
            <Segment>
                <Item.Group divided>
                    {
                        this.props.items.map((item, index) => (
                
                                <BasketItem item={item} 
                                            key={index} 
                                            user={this.props.user}
                                />
                        ))
                    }
                </Item.Group>
            </Segment>
        );
    }
}
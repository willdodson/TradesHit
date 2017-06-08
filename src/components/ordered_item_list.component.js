import React from 'react';
import { Item, Divider, Segment } from 'semantic-ui-react';
import CommonStyles from '../constants/common.styles';
import OrderedItem from './ordered_item.component';

export default class SymOrderedItemList extends React.Component{

    render() {
        return (
            <Segment>
                <Item.Group divided>
                    {
                        this.props.items.map((item, index) => (
                
                                <OrderedItem item={item} 
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
import React from 'react';
import { Icon, Button, Item } from 'semantic-ui-react';
import CommonStyles from '../constants/common.styles';
// import SymBuyNowBtn from './buy_now_btn.component';
import { withRouter } from 'react-router'

class SymOrderedItem extends React.Component{

    render() {
        return (
            <Item>
                <Item.Image size='tiny' src='../../assets/images/product.jpg' />

                <Item.Content>
                    <Item.Header as='a'>{ this.props.item.displayName }</Item.Header>
                    <Item.Meta>
                        <span className="date">
                            <Icon name="rupee" />
                            { this.props.item.price}
                        </span>
                    </Item.Meta>
                    <Item.Description>
                        { this.props.item.description }
                    </Item.Description>
                    <Item.Extra>
                        
                    </Item.Extra>
                </Item.Content>
            </Item>
        );
    }
}

export default withRouter(SymOrderedItem);
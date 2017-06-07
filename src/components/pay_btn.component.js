import React from 'react';
import { Icon, Button } from 'semantic-ui-react';
import CommonStyles from '../constants/common.styles';

export default class SymPayNowBtn extends React.Component{
    
    onBuyNowBtnClick = (event, data, item) => {
        console.log('Buy Now clicked');
        event.stopPropagation();

        // go to buy now page.
        this.props.history.push(`/item/${item.displayName}/buy_now`)
    }

    render() {
        return (
            <Button color={CommonStyles.primaryButtonColor}
                    onClick={(e, data) => this.onBuyNowBtnClick(e, data, this.props.item)}>
                <Icon name='payment' />Pay now
            </Button>
        );
    }
}
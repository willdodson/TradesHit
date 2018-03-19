import React from 'react';
import { withRouter } from 'react-router';
import { Icon, Button } from 'semantic-ui-react';
import CommonStyles from '../constants/common.styles';

class SymBuyNowBtn extends React.Component{
    
    onBuyNowBtnClick = (event, data, item) => {
        console.log('Buy Now clicked');
        event.stopPropagation();

        // go to Trade page.
        this.props.history.push(`/item/${item.displayName}/buy_now`)
    }

    render() {
        return (
            <Button centered compact color={CommonStyles.primaryButtonColor}
                    onClick={(e, data) => this.onBuyNowBtnClick(e, data, this.props.item)}>
                Make a Trade
            </Button>
        );
    }
}

export default withRouter(SymBuyNowBtn);
import React from 'react';
import { Icon, Button } from 'semantic-ui-react';
import CommonStyles from '../constants/common.styles';
import { connect } from 'react-redux';

class SymAddToBasket extends React.Component{

    onAddToBasketBtnClick = (event, data, item) => {
        event.stopPropagation();
        // go to buy now page.
        this.props.history.push(`${this.props.user._id}/basket`)
    }

    render() {
        return (
            <Button centered compact color={CommonStyles.secondaryButtonColor} 
                    onClick={(e, data) => this.onAddToBasketBtnClick(e, data, this.props.item)}>
                 Add to Watchlist
            </Button>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(SymAddToBasket);
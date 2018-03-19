import React from 'react';
import { connect } from 'react-redux';
import { Grid, Input, Button, Segment, Label } from 'semantic-ui-react';
import CommonStyles from '../constants/common.styles';
import SymOrderedItemList from '../components/ordered_item_list.component';

class SymUserOrders extends React.Component {

    constructor(props) {
        super(props);
        this.state = { user: { ...this.props.user }};
    }

    componentWillReceiveProps(nextProps){
        this.setState({ user: { ...nextProps.user } });
    }

    render() {
        const user = this.state.user;
        console.log('Watchlist...', user.basketItems);
        return (
            <div>
                <SymOrderedItemList  items={ user.orders } 
                                    user={ user }
                />
            </div>
       );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(SymUserOrders);
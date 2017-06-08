import React from 'react';
import { connect } from 'react-redux'; 
import { Segment, Header, Icon } from 'semantic-ui-react';
// import SymAddress from '../components/address.component';
// import CommonStyles from '../constants/common.styles';
import { fetchProductDetailPageContent } from '../actions/product_detail.actions';
import SymLoader from '../components/loader.component';
import SymPayNowBtn from  '../components/pay_btn.component';
// import SymBillingSummary from '../components/bill_summary.component';
// import SymItemDescription from '../components/item_description.component';
import SymItemDetail from '../containers/item_info.container';

class SymBuyNow extends React.Component {
    constructor(props) {
        super(props);
        this.props.dispatch(fetchProductDetailPageContent(this.props.match.params.name))
    }

    render() {
        if(this.props.product.isFetching || !this.props.product.detail){
            return (
                <SymLoader text="Please wait while we are getting more details for you!"/>
            )
        }

        const product = this.props.product.detail;
        return (
            <Segment.Group horizontal>
                <Segment>
                    <SymItemDetail item={product}/>
                </Segment>
                <Segment>
                    <Header as='h4'>
                        <Header.Content> Your actions 
                            <Header.Subheader>
                                Would you like to
                            </Header.Subheader>
                        </Header.Content>
                    </Header>
                    <Header sub>
                        <SymPayNowBtn  item={product} { ...this.props }/>
                    </Header>
                </Segment>
            </Segment.Group>
        );
    }
}

const mapSTateToProps = (state) => {
    return {
        product: state.productDetail
    };
}

export default connect(mapSTateToProps)(SymBuyNow);
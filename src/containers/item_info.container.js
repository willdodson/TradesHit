import React from 'react';
// import { connect } from 'react-redux'; 
import { Item, Divider, Image, Icon, Segment } from 'semantic-ui-react';
import SymAddress from '../components/address.component';
// import CommonStyles from '../constants/common.styles';
// import { fetchProductDetailPageContent } from '../actions/product_detail.actions';
// import SymLoader from '../components/loader.component';
// import SymPayNowBtn from  '../components/pay_btn.component';
import SymBillingSummary from '../components/bill_summary.component';
import SymItemDescription from '../components/item_description.component';

export default class SymItemDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // if(this.props.product.isFetching || !this.props.product.detail){
        //     return (
        //         <SymLoader text="Please wait while we are getting more details for you!"/>
        //     )
        // }

        const product = this.props.item;
        return (
            <Item.Group>
                <Item>
                    <Item.Image size='large' src='../../assets/images/product.jpg'/>
                    <Item.Content>
                        <Item.Header as='a'>{ product.displayName}</Item.Header>
                        <Item.Meta> 
                            
                            <span className='price'>{ product.price }</span>
                        </Item.Meta>
                        <Item.Description>
                            <Segment>
                                <SymItemDescription item={ product }/>
                            </Segment>
                            <Segment>
                                <SymBillingSummary item={ product }/>
                            </Segment>
                            <Segment>
                                <SymAddress />
                            </Segment>
                        </Item.Description>
                    </Item.Content>
                </Item>
            </Item.Group>
        );
    }
}

// const mapSTateToProps = (state) => {
//     return {
//         product: state.productDetail
//     };
// }

// export default connect(mapSTateToProps)(SymItemDetail);
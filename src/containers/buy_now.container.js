import React from 'react';
import { connect } from 'react-redux'; 
import { Item, Input, Divider, Image, Button, Icon, Segment, Header } from 'semantic-ui-react';
import SymAddress from '../components/address.component';
import CommonStyles from '../constants/common.styles';
import { fetchProductDetailPageContent } from '../actions/product_detail.actions';
import SymLoader from '../components/loader.component';
import SymPayNowBtn from  '../components/pay_btn.component';
import SymBillingSummary from '../components/bill_summary.component';
import SymItemDescription from '../components/item_description.component';

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
            <div> 
                <Item.Group>
                <Item>
                    <Item.Image size='large' src='../../assets/images/product.jpg'/>

                    <Item.Content>
                        <Item.Header as='a'>{ product.displayName}</Item.Header>
                        <Item.Meta> 
                            <Icon name="rupee"/>
                            <span className='price'>{ product.price }</span>
                        </Item.Meta>
                        <Item.Description>
                            <Segment>
                                <SymItemDescription item={ product }/>
                            </Segment>
                            <Segment>
                                <SymBillingSummary item={ product }/>
                            </Segment>
                        </Item.Description>
                        <Item.Extra>
                            <Divider />
                            <SymPayNowBtn item={ product } />
                        </Item.Extra>
                    </Item.Content>
                </Item>
                </Item.Group>
                <Divider />

                <SymAddress />
            </div>
        );
    }
}

const mapSTateToProps = (state) => {
    return {
        product: state.productDetail
    };
}

export default connect(mapSTateToProps)(SymBuyNow);
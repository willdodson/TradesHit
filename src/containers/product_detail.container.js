import React from 'react';
import { connect } from 'react-redux'; 
import { Item, Input, Divider, Image, Button, Icon } from 'semantic-ui-react';
import SymAddress from '../components/address.component';
import CommonStyles from '../constants/common.styles';
import { fetchProductDetailPageContent } from '../actions/product_detail.actions';
import SymLoader from '../components/loader.component';

class SymProducDetail extends React.Component {

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
                    <Item.Image size='large' src='../assets/images/product.jpg'/>

                    <Item.Content>
                        <Item.Header as='a'>{ product.displayName}</Item.Header>
                        <Item.Meta> 
                            <Icon name="rupee"/>
                            <span className='price'>{ product.price }</span>
                        </Item.Meta>
                        <Item.Description>
                            <p> Description </p>
                            <p> { product.description } </p>
                        </Item.Description>
                        <Item.Extra>
                            <Button.Group>
                                <Button color={CommonStyles.secondaryButtonColor}>
                                    <Icon name='shopping basket' /> Add to Basket
                                </Button>
                                <Button.Or />
                                <Button color={CommonStyles.primaryButtonColor}>
                                    <Icon name='lightning' />Buy Now
                                </Button>
                                </Button.Group>
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

export default connect(mapSTateToProps)(SymProducDetail);
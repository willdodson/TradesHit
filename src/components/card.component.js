import React from 'react';
import { connect } from 'react-redux';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

import CommonStyles from '../constants/common.styles';

const CardStyles = {
    CardLayout: {
        margin: 10,
    }
}

class SymCard extends React.Component {

    onCardClick = (e, data, cardDetails) => {
        if(this.props.onCardClick){
            return this.props.onCardClick(e, data);
        }
        // default action.
        this.props.history.push(cardDetails.url);
    }

    render() {
        return (
            <Card   color={CommonStyles.colorName} 
                    style={CardStyles.CardLayout}
                    onClick={ (e, data) => this.onCardClick(e, data, this.props.item) }>
                <Image src='/assets/images/product.jpg' />
                <Card.Content>
                    <Card.Header> { this.props.item.displayName } </Card.Header>
                    <Card.Meta>
                        <span className='date'>
                            <Icon name='rupee' /> { this.props.item.price }
                        </span>
                    </Card.Meta>
                    <Card.Description> { this.props.item.url || '< Description not available >'} </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button.Group>
                        <Button color={CommonStyles.secondaryButtonColor}>
                              <Icon name='shopping basket' /> Add to Basket
                        </Button>
                        <Button.Or />
                        <Button color={CommonStyles.primaryButtonColor}>
                            <Icon name='lightning' />Buy Now
                        </Button>
                    </Button.Group>
                </Card.Content>
            </Card>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        ...state.landingPage
    }
}

export default connect(mapStateToProps)(SymCard)

import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import CommonStyles from '../constants/common.styles';

const CardStyles = {
    CardLayout: {
        margin: 10,
    }
}

export default class SymCard extends React.Component {
    render() {
        return (
            <Card color={CommonStyles.colorName} style={CardStyles.CardLayout}>
                <Image src='/assets/images/product.jpg' />
                <Card.Content>
                    <Card.Header> Item#Name </Card.Header>
                    <Card.Meta>
                        <span className='date'>
                        <Icon name='rupee' /> 324
                        </span>
                    </Card.Meta>
                    <Card.Description> Matthew is a musician living in Nashville. </Card.Description>
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
import React from 'react';
import { Icon, Button } from 'semantic-ui-react';
import CommonStyles from '../constants/common.styles';

export default class SymBuyNowBtn extends React.Component{
    render() {
        return (
            <Button color={CommonStyles.primaryButtonColor}>
                <Icon name='lightning' />Buy Now
            </Button>
        );
    }
}
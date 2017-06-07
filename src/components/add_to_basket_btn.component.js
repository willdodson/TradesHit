import React from 'react';
import { Icon, Button } from 'semantic-ui-react';
import CommonStyles from '../constants/common.styles';

export default class SymBuyNowBtn extends React.Component{
    render() {
        return (
            <Button color={CommonStyles.secondaryButtonColor}>
                <Icon name='shopping basket' /> Add to Basket
            </Button>
        );
    }
}
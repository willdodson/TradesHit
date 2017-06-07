import React from 'react';
import { Icon, Header } from 'semantic-ui-react';

export default class SymItemDescription extends React.Component{


    render() {
        return (
            <div>
                <Header as="h4">
                    <Icon name='info circle' />
                    <Header.Content>Product Details</Header.Content>
                    <Header.Subheader></Header.Subheader>
                </Header>
                <Header.Subheader>{ this.props.item.description }</Header.Subheader>
            </div>
        );
    }
}
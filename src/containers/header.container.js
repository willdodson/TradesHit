import React from 'react';
import { connect } from 'react-redux';
import { Menu, Grid, Header, Label, Icon } from 'semantic-ui-react';

import SymSearch from '../components/search.component';
import SymLogo from '../components/logo.component';
import SymUserAvatar from '../components/avatar.component';
import SymMenu from '../components/menu.component';
import SymSigningModal from '../components/signing.component';

import CommonStyles from '../constants/common.styles';

const MenuItems = [
    { displayName: 'Active Trades', categories: [{displayName: '<$20'}, {displayName: '<$50'}, {displayName: '<$1,000,000'}]},
    { displayName: 'Watchlist',  categories: [{displayName: 'My List'}, {displayName: 'Random Goodness'}, {displayName: 'Suggested'}]},
    { displayName: 'The Good Stuff',  categories: [{displayName: 'Contact Info'}, {displayName: 'Employment'}, {displayName: 'Our Mission'}]}
];

class SymHeader extends React.Component {
    state = {};

    render() {
        const { activeItem } = this.state;
        return (
            <Grid centered style={CommonStyles.header}>
                <Grid.Row columns={3}>
                    <Grid.Column width={1}> <Icon name='recycle' size='huge' />  </Grid.Column>
                    <Grid.Column width={2}>  <h1 text-color='white'>TradesHit </h1> </Grid.Column>
                    <Grid.Column width={8}> <SymSearch /> </Grid.Column>
                    <Grid.Column text-align='right' width={2}>
                        {
                            this.props.user ? (<SymSigningModal />): 
                            (<SymUserAvatar user={this.props.user}/>)
                        }
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                    <Grid.Column width={14}> <SymMenu menuItems={MenuItems}> </SymMenu> </Grid.Column>
                </Grid.Row>
            </Grid> 
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(SymHeader);
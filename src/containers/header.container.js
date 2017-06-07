import React from 'react';
import { connect } from 'react-redux';
import { Menu, Grid, Header } from 'semantic-ui-react';

import SymSearch from '../components/search.component';
import SymLogo from '../components/logo.component';
import SymUserAvatar from '../components/avatar.component';
import SymMenu from '../components/menu.component';
import SymSigningModal from '../components/signing.component';

import CommonStyles from '../constants/common.styles';

const MenuItems = [
    { displayName: 'Fashion', categories: [{displayName: 'Footwear'}, {displayName: 'Topwear'}, {displayName: 'Bottomwear'}]},
    { displayName: 'Electronics',  categories: [{displayName: 'Mobiles'}, {displayName: 'Tablets'}, {displayName: 'Laptops'}]},
    { displayName: 'Books',  categories: [{displayName: 'Novels'}, {displayName: 'Magzines'}, {displayName: 'Academics'}]}
];

class SymHeader extends React.Component {
    state = {};

    render() {
        const { activeItem } = this.state;
        return (
            <Grid style={CommonStyles.header}>
                <Grid.Row columns={3}>
                    <Grid.Column width={1}>  <SymLogo />   </Grid.Column>
                    <Grid.Column width={13}> <SymSearch /> </Grid.Column>
                    <Grid.Column width={2}>
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
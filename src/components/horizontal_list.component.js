import React from 'react';
import { connect } from 'react-redux';
import { Menu, Header, Divider, Grid, Card } from 'semantic-ui-react';

import SymCard from '../components/card.component';
import { fetchSectionPageContent } from '../actions/section.actions';

const HorizontalListStyle = {
    GridStyle: {
        margin: 0
    }
}
export default class SymHorizontalList extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <section>
                <Header as='h3' dividing color="red" textAlign="center"> { this.props.section.displayName }</Header>
                <Grid columns={4} style={HorizontalListStyle.GridStyle}>
                {
                    this.props.section.items.map((item, index) =>
                        <SymCard item={item} 
                                key={Math.random()*1000 + index } 
                                { ...this.props }
                        />                
                    )
                }
                </Grid>
            </section>
        )
    }
}

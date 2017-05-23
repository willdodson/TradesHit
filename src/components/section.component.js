import React from 'react';
import { Menu, Header, Divider, Grid, Card } from 'semantic-ui-react';
import SymCard from './card.component';

const SectionStyle = {
    GridStyle: {
        margin: 0
    }
}
export default class SymSectionMenu extends React.Component {
    render () {
        return (
            <section>
                <Header as='h3' dividing color="red" textAlign="center"> { this.props.section.displayName }</Header>
                <Grid columns={4} style={SectionStyle.GridStyle}>
                {
                    this.props.section.items.map((item, index) =>
                        <SymCard item={item} key={Math.random()*1000 + index}/>                
                    )
                }
                </Grid>
            </section>
        )
    }
}
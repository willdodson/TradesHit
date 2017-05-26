import React from 'react';
import { connect } from 'react-redux';
import { Menu, Header, Divider, Grid, Card } from 'semantic-ui-react';

import SymCard from '../components/card.component';
import { fetchSectionPageContent } from '../actions/section.actions';
import SymLoader from '../components/loader.component';

const SectionStyle = {
    GridStyle: {
        margin: 0
    }
}

class SymSection extends React.Component {

    constructor(props) {
        super(props);
        // make API request...
        this.props.dispatch(fetchSectionPageContent('your_searches'))
    }

    addNavigationUrlToItems = (items) => {
        return items.map(item => {
            return { ...item, url:`/item/${item.displayName}`};
        });
    }

    render () {
        if(this.props.section.isFetching || !Array.isArray(this.props.section.items)){
            return (
            <section>
                <Header as='h3' dividing color="red" textAlign="center"> { this.props.location.pathname }</Header>
                <SymLoader text="Please wait while we are getting exciting deals for you!"/>
            </section>
            );
        }

        this.props.section.items = this.addNavigationUrlToItems(this.props.section.items);

        return (
            <section>
                <Header as='h3' dividing color="red" textAlign="center"> { this.props.section.displayName }</Header>
                <Grid columns={4} style={SectionStyle.GridStyle}>
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

const mapStateToProps = (state) => {
    return {
        section: state.sectionPage
    }
}

export default connect(mapStateToProps)(SymSection);
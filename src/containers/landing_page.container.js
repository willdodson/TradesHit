import React from 'react';
import { connect } from 'react-redux';
import { Segment, Dimmer, Loader } from 'semantic-ui-react';

import SymHorizontalList from '../components/horizontal_list.component';
import { fetchLandingPageContent } from '../actions/landing_page.actions';
import SymLoader from '../components/loader.component';

const Data = {
    sections: [
        { displayName: 'Top Deals', items: [1,2,3]},
        { displayName: 'Your searches', items: [1,2,3]},
        { displayName: 'Top selliing', items: [1,2,3]}
    ]
};

class SymLandingPage extends React.Component{
    constructor(props) {
        super(props);
        console.log('LandingPage#container... Calling action creator');
        this.props.dispatch(fetchLandingPageContent());
    }

    addNavigationUrlToItems = (sections) => {
        return sections.map(section => {             
                section.items = section.items.map(item => {
                    return { 
                        ...item, 
                        url:`/sections/${section.name}`
                    };
                });
            return section;
        });
    }

    render() {
        if(!this.props.content || this.props.isFetching){
            // If either fetching or content is not available. Show loader.
            return (<SymLoader text="Please wait..."/>) 
        }

        this.props.content.sections = this.addNavigationUrlToItems(this.props.content.sections);
        console.log('LandingPage#render#Section content is ', this.props.content.sections);
        return (
            <div>
                {
                    this.props.content.sections.map((section, index) => (
                        <SymHorizontalList section={section} key={index} {...this.props} />
                    ))
                }
            </div>                
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.landingPage
    }
}

export default connect(mapStateToProps)(SymLandingPage)
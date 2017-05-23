import React from 'react';
import { Search } from 'semantic-ui-react';

const SearchStyles= {
    display: 'grid'
}
export default class SymSearch extends React.Component {
    handleResultSelect = () => {

    }

    handleSearchChange = () => {

    }

    render() {
        return (
            <Search
                style={SearchStyles}
                loading={this.props.isLoading}
                onResultSelect={this.handleResultSelect}
                onSearchChange={this.handleSearchChange}
                results={this.props.results}
                value={this.props.value}
                {...this.props}
            />
        );
    }
}
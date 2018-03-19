import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';

const sections = [
  { key: 'Home', content: 'Home', link: true },
  { key: 'Store', content: 'Store', link: true },
  { key: 'Shirt', content: 'The Good Stuff', active: true },
]

export default class SymBreadCrum extends React.Component {
    render() {
        console.log(this.props);
        return (
            <Breadcrumb icon='right angle' sections={sections}>
            </Breadcrumb>
        )
    }
}
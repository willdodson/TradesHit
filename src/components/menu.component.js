import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import CommonStyles from '../constants/common.styles';

export default class SymMenu extends React.Component {
    state = {};
    
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const options = {
            activeItem: this.state.activeItem
        }
        return (
            <div>
                <Menu stackable inverted>
                    {
                        this.props.menuItems.map(menuItem => (
                            <Menu.Item key={menuItem.displayName}>
                                <Dropdown text={menuItem.displayName}>
                                    <Dropdown.Menu>
                                     {
                                          menuItem.categories.map(category => (
                                            <Dropdown.Item text={category.displayName} key={category.displayName}/>
                                          ))
                                     }
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Item>
                        ))                    
                    }
                </Menu>
            </div>
        );
    }
}
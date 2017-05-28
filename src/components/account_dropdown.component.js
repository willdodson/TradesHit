import { Dropdown } from 'semantic-ui-react';
import React from 'react';
const Label = {
    color: 'white',
    display: 'inline-block',
    padding: '2px 5px 2px 5px',
    cursor: 'pointer'
},
    DropDownItems = {
        Account: { name: 'my_account', text: 'My Account' },
        Settings: { name: 'settings', text: 'Settings' },
        Help: { name: 'help', text: 'Help me!', icon: 'help' },
        Signout: { name: 'signout', text: 'Signout', description: 'See you later'  },
    }

export default class AccountDropDown extends React.Component {

    handleClick = (e, data, name) => {
        e.preventDefault();
        switch(name){
            case DropDownItems.Signout.name:

            break;
            default:
            break; 
        }
    };
    render() {
        return (
            <Dropdown text={`Hi, ${this.props.user.firstName}`} style={Label}>
                <Dropdown.Menu>
                <Dropdown.Item { ...DropDownItems.Account} 
                    href="/profile"
                />
                <Dropdown.Item { ...DropDownItems.Settings}
                    href="/settings"
                />
                <Dropdown.Divider />
                <Dropdown.Item { ...DropDownItems.Help}
                    href="/help"
                />
                <Dropdown.Item { ...DropDownItems.Signout}
                    onClick={(e, data) => this.onDropDownClicked(e, data, DropDownItems.Signout.name)}
                />
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}
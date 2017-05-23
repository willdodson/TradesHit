
import React from 'react';
import { Image } from 'semantic-ui-react'

export default class SymLogo extends React.Component {
    render () {
        return (
          <Image src='../assets/images/logo.png' size='mini' shape='circular' />
        );
    }
}
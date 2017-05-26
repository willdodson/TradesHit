import React from 'react';
import { Segment, Dimmer, Loader } from 'semantic-ui-react';


export default class SymAppLoader extends React.Component{
  render() {
    return (
          <Segment>
                <Dimmer active inverted>
                  <Loader size='large'>{ this.props.text }</Loader>
              </Dimmer>
          </Segment>
      );
  }
};
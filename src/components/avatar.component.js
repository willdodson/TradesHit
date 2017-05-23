import React from 'react';
import { Image } from 'semantic-ui-react';

const defaultProfilePicPath = '../assets/images/user_avatar_placeholder.png';

export default class SymUserAvatar extends React.Component{
  render() {
    const profilePic = this.props.user && this.props.user.profilePic ? this.props.user.profilePic : defaultProfilePicPath;
    return (
      <div>
        <Image src={profilePic} avatar />
        <span>{ this.props.user.name }</span>
      </div>
    );
  }
};
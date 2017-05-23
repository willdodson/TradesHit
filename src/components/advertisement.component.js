import React from 'react';
import { Advertisement, Image } from 'semantic-ui-react';

export default class SysAdvertisementBanner extends React.Component{
    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
    }

    render() {
        //               <Image src='../assets/images/ad_converse.gif'/>

        return (
            <Advertisement unit='large leaderboard' test="Ad here..." centered>
            </Advertisement>
        )
    }
}
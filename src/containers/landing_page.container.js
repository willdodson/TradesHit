import React from 'react';
import SymSection from '../components/section.component';

const sections = [
    { displayName: 'Top Deals', items: [1,2,3]},
    { displayName: 'Your searches', items: [1,2,3]},
    { displayName: 'Top selliing', items: [1,2,3]}
];

export default class SymLandingPage extends React.Component{
    render() {
        return (
            <div>
                {
                    sections.map((section, index) => (
                        <SymSection section={section} key={index}></SymSection>
                    ))
                }
            </div>                
        );
    }
}
import React from 'react';

class About extends React.Component {
    componentDidMount () {
        console.log('mount');
    }

    componentWillUnmount () {
        console.log('un mount');
    }

    render () {
        return (
            <h3>My name is Zane</h3>
        );
    }
};

export default About;

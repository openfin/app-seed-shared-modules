import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           title:" This is the default title:"
        };
    }
    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentWillMount');
    }

    render() {
        return <div>{this.state.title}</div>
    }
}
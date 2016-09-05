import React from 'react';

export default class SubHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stateText: "State text"
        };
    };

    componentWillMount () {
       // console.log("componentWillMount")
    };

    componentDidMount () {
        //console.log("componentDidMount");
    };

    componentWillReceiveProps (nextProps){
        //console.log("componentWillReceiveProps: nextProps ",nextProps)
    }

    render() {
        return (<div className="submodule-header">
                {this.props.text}
        </div>);
    }
}

SubHeader.defaultProps =  {
    text: "This is the default text"
};

SubHeader.propTypes ={
    text: React.PropTypes.string
};
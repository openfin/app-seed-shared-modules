import React from 'react';
import Enums from '../Enums.js';
import SubHeader from './sub-module.js'


import OpenfinHeaderInterapp from '../openfin/openfin-header-interapp.js'



export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            openFinHeadline: "Openfin Headline"
        };
    };

    openFinCallback (evt) {
        console.log(evt);
        this.setState({openFinHeadline: evt.text});
    }

    componentWillMount () {
        console.log("componentWillMount")
    };

    componentDidMount () {
        console.log("componentDidMount");
        //Don't forget the 'bind(this)' so the execution context is scoped to the component itself
        let __callback = this.openFinCallback.bind(this);
        OpenfinHeaderInterapp.subscribeWithWildcard(Enums.COMMON_HEADER_CHANGED, __callback);
    };

    componentWillReceiveProps (nextProps){
        console.log("componentWillReceiveProps: nextProps ",nextProps)
    }

    render() {
        return (<div className="common-header">
            <SubHeader />
            <div className="main-header">
                {this.props.headline}
            </div>
            <div className='sub-header'>
               {this.props.subHeadline}
            </div>
            <div className='openfin-header'>
                {this.state.openFinHeadline}
            </div>
        </div>);
    }
}

Header.defaultProps =  {
    headline: "This is the default headline",
    subHeadline: "The subHeadline"
};

Header.propTypes ={
    headline: React.PropTypes.string,
    subHeadline: React.PropTypes.string
};
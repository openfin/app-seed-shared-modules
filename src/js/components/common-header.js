import React from 'react';

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    };

    componentWillMount () {

    };


    componentDidMount () {

    };

    componentWillReceiveProps (nextProps){
        console.log("componentWillReceiveProps: nextProps ",nextProps)
    }

    shouldComponentUpdate (nextProps, nextState) {
        console.log(nextProps, nextState)
    }


    render() {
        return (<div className="common-header">
            <div className="main-header">
                {this.props.headline}
            </div>
            <div className='sub-header'>
               {this.props.subHeadline}
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
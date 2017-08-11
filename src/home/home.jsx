import React, {Component} from 'react';
import {connect} from 'react-redux';
import {initHome} from './action';
class Home extends Component {
	componentWillMount () {
		console.log(this.props.pageName);
		this.props.initHome('home');
	}
    render() {
        return (
	       	<div className="page-home">
	           {this.props.pageName}
	        </div>
        );
    }
}
function mapStateToProps (state) {
	const {home} = state;
    const {pageName} = home;
    return {pageName};
}

export default connect(mapStateToProps, {initHome})(Home);
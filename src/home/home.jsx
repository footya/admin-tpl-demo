import React, {Component} from 'react';
import {connect} from 'react-redux';
import {initHome} from './action';
import {Button} from 'antd';
import 'antd/dist/antd.css';
class Home extends Component {
	componentWillMount () {
		console.log(this.props.pageName);
		this.props.initHome('home');
	}
    render() {
        return (
	       	<div className="page-home">
	            {this.props.pageName}
	            <Button type="primary">Primary</Button>
			    <Button>Default</Button>
			    <Button type="dashed">Dashed</Button>
			    <Button type="danger">Danger</Button>
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
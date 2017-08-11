import React, {Component} from 'react';
import {Provider, connect} from 'react-redux';
// react-router v4
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// 引入所有reducer
import initStore from './store';
import Home from './home/home';
import './main.scss';
export default class Routes extends Component {
    render() {
        return (<Provider store={initStore}>
                    <Router>
                        <div className="main">
                            <div className="left-cont">
                                <ul>
                                    <li><Link to="/home">home</Link></li>
                                    <li><Link to="/list">list</Link></li>
                                </ul>
                            </div>
                            <div className="right-cont">
                                <Route path="/home" component={Home}/>
                            </div>
                        </div>
                    </Router>
                </Provider>);
    }
}

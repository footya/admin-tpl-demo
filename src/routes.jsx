import React, {Component} from 'react';
import {Provider, connect} from 'react-redux';
// react-router v4
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// 引入所有reducer
import initStore from './store';
import Home from './home/home';
export default class Routes extends Component {
    render() {
        return (<Provider store={initStore}>
                    <Router>
                        <div className="main">
                            <ul>
                                <li><Link to="/home">home</Link></li>
                                <li><Link to="/list">list</Link></li>
                            </ul>
                            <Route path="/home" component={Home}/>
                        </div>
                    </Router>
                </Provider>);
    }
}

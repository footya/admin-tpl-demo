import {render} from 'react-dom';
import React, {Component} from 'react';
import {createStor} from 'redux';
import {Provider, connect} from 'react-redux';
// react-router v4
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// 引入所有reducer
import initStore from './store';
import Home from './home/index';


render(
    <Provider store={initStore}>
        <Router>
            <div className="main">
                <ul>
                    <li><Link to="/">home</Link></li>
                </ul>
                <Route path="/home" component={Home}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);


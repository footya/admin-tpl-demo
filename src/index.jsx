import ReactDOM from 'react-dom';
import React, {Component} from 'react';

// 模块热加载
import {AppContainer} from 'react-hot-loader';

import Routes from './routes';
const render = (Components)=>{
    ReactDOM.render(
        <AppContainer>
            <Components />
        </AppContainer>,
        document.getElementById('root')
    );
};

render(Routes);
if (module.hot) {
    // 需要热加载的模块必须是个独立文件
    module.hot.accept('./routes', ()=>{
        console.log('----1-');
        // 这个地方必须重新require一次，否则不能更新
        const nextRoutes = require('./routes').default;
        render(Routes);
    });
}

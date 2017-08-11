# admin-tpl-demo


## 模块热加载hmr支持

- .babelrc 添加 ```"plugins": ["react-hot-loader/babel"]```
- webpack 添加如下
    ```
    entry: {
            'index': [
                'react-hot-loader/patch',
                // 加上reload=true以后可以使得不是hmr的模块reload
                'webpack-hot-middleware/client?reload=true',
            ]
        },
    ```
- tools/sever.js 添加
    ```
    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        hot: true,
        inline: true,
        lazy: false,
        historyApiFallback: true
    }));
    ```
- 改造入口模块

    ```
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
    ```

## 添加Postcss

- webpack.config.js 添加postcss-loader
    ```
    {
        test: /\.s?css$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader']
    }
    ```
- 增加postcss.config.js
    ```
    module.exports = {
        plugins: [
            require('precss'),
            require('autoprefixer'),
        ]
    }
    ```

## 扩展阅读

- [html-webpack-plugin用法全解](https://segmentfault.com/a/1190000007294861)
- [react-hot-loader-minimal-boilerplate](https://github.com/wkwiatek/react-hot-loader-minimal-boilerplate)
- [react-hot-boilerplate](https://github.com/gaearon/react-hot-boilerplate)
- [ReactRouter-V4 构建之道与源码分析](https://zhuanlan.zhihu.com/p/25696969)
- [hot-module-replacement](https://github.com/webpack/docs/wiki/hot-module-replacement)
- [模块热替换(HMR)的几种方式](https://segmentfault.com/a/1190000009244530)
- [an design 脚手架市场](http://scaffold.ant.design/)
- [browser-sync-webpack-plugin](https://github.com/Va1/browser-sync-webpack-plugin)
- [postcss](https://github.com/postcss/postcss)
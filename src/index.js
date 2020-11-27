import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Router from './router';
import 'antd/dist/antd.less';
import './index.less';

class App extends Component {
    render() {
        return <Router/>
    }
}

ReactDom.render(<App/>, document.querySelector('#app'));

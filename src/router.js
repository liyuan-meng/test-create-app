import React, { Component } from 'react';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import ROUTER_CONFIG from './routerConfig';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

class AppRouter extends Component {

    renderMenuItem(list) {
        return (
            list.map(item => (
                <Menu.Item key={item.id}>
                    <Link to={item.path}>{item.title}</Link>
                </Menu.Item>
            ))
        )
    }

    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Sider className="site-layout-background" width={200}>
                        <Menu
                            collapsed="false"
                            mode="inline"
                            theme="dark"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['1']}
                            style={{ height: '100%' }}
                        >
                            {ROUTER_CONFIG.map(item => (
                                item.children && item.children.length ? (
                                    <SubMenu key={item.id} icon={item.icon} title={item.title}>
                                        {this.renderMenuItem(item.children)}
                                    </SubMenu>
                                ) : (
                                    this.renderMenuItem([item])
                                )
                            ))}
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Content className="site-layout-background">
                            <Switch>
                                {
                                    ROUTER_CONFIG.reverse().map(item =>
                                        <Route key={item.id} path={item.path} component={item.component}/>
                                    )
                                }
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </BrowserRouter>
        )
    }
}

export default AppRouter;

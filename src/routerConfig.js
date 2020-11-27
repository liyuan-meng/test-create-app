import React from 'react';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Home from './home';
import Blog from './blog';
import Resume from './resume';
import User from './user';

export default [
    {
        id: 1,
        path: '/',
        title: '首页', // 首页
        component: Home,
        icon: <UserOutlined/>
    },
    {
        id: 2,
        path: '/blog',
        title: '博客管理', // 博客管理
        component: Blog,
        icon: <LaptopOutlined/>,
        children: [
            {
                id: 21,
                title: "博客列表", // 博客列表
                path: "/blog/list",
            },
            {
                id: 22,
                title: "添加博客", // 添加博客
                path: "/blog/add",
            }
        ]
    },
    {
        id: 3,
        path: '/resume',
        title: '简历管理', // 简历管理
        component: Resume,
        icon: <NotificationOutlined/>
    },
    {
        id: 4,
        path: '/user',
        title: '用户管理', // 用户管理
        component: User,
        icon: <UserOutlined/>,
        children: [
            {
                id: 41,
                title: "用户列表", // 用户列表
                path: "/user/list",
            },
            {
                id: 42,
                title: "添加用户", // 添加用户
                path: "/user/add",
            }
        ]
    }
];

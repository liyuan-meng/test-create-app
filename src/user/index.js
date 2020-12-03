import React from 'react'
import { Route } from 'react-router-dom';
import loadable from '../../utils/loadable';
const AddUserPage = loadable(import('./pages/add'));
const UserListPage = loadable(import('./pages/list'));

// import AddUserPage from './pages/add';
// import UserListPage from './pages/list';

class User extends React.Component {
    render(){
        return (
            <div>
                <p>用户管理</p>
                <Route path="/user/list" component={UserListPage} />
                <Route path="/user/add" component={AddUserPage} />
            </div>
        )
    }
}

export default User;

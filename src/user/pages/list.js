import React from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';
import { Button, Table } from 'antd';
import Store from '../store';

@observer
class UserListPage extends React.Component {
    store = new Store();

    columns = [
        {
            title: 'name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'tel',
            dataIndex: 'tel',
            key: 'tel'
        },
    ];

    constructor(props) {
        super(props);
        this.store.fetchUserList();
    }

    @action.bound
    handleAddUser() {
        this.props.history.push('/user/add');
    }

    render(){
        return (
            <div>
                <Button type="primary" onClick={this.handleAddUser}>add user</Button>
                <Table columns={this.columns} dataSource={this.store.userList} />
            </div>
        )
    }
}

export default UserListPage;


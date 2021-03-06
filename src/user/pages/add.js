import React from 'react'
import { observer } from 'mobx-react';
import { computed, action } from 'mobx';
import { Button, Form, Input, message } from 'antd';
import Store from '../store';

@observer
class AddUserPage extends React.Component {
    store = new Store();

   @computed
   get userList() {
       return this.store.userList;
   }

    @action.bound
    async onFinish(values) {
        await this.store.addUser(values);
        message.success('success!');
    };

    render() {
        const layout = {
            labelCol: {
                span: 8,
            },
            wrapperCol: {
                span: 16,
            },
        };
        const tailLayout = {
            wrapperCol: {
                offset: 8,
                span: 16,
            },
        };

        return (
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={this.onFinish}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Telephone"
                    name="telephone"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your telephone!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}

export default AddUserPage;

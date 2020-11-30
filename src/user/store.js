import { action, observable } from 'mobx';
import http from '../../utils/http';

class Store {
    @observable
    userList = [
        {
            name: '张三',
            tel: '1312312453454'
        },
        {
            name: '李四',
            tel: '1312312453454'
        }
    ];

    @action
    async fetchUserList() {
        const { data } = await http.get('/user/list');
        this.userList = data.list || [];
    }

    addUser(params) {
        http.put('/user/add', params);
    }
}

export default Store;

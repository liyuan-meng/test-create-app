import { action, observable } from 'mobx';
import http from '@utils/http';

class Store {
    @observable
    userList = [];

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

import { action, observable } from 'mobx';

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
    fetchUserList() {
        return this.userList;
    }
}

export default Store;

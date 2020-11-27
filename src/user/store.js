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
    async fetchUserList() {
        const res = await fetch('/api/test/profile');
        this.userList = (await res.json()).list;
    }
}

export default Store;

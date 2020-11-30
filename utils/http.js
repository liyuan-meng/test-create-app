import axios from 'axios';

const http = axios.create({
    baseURL: '/api'
});

http.interceptors.request.use(config => {
    config.headers['x-token'] = 'token**token**token';
    return config;
}, error => {
    return Promise.reject(error);
});

http.interceptors.response.use(response => {
        return Promise.resolve(response);
    }, error => {
    const { data = {} } = error.response || {};
    const { description = '' } = data;

    if (description) {
        Message.error({ msg: description });
    } else {
        Message.error({ msg: '发生未知错误请联系客服' });
    }
    return Promise.reject(error);
});

export default http;

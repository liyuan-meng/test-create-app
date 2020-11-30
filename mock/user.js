module.exports = (router, { Random, mock }) => {
    router.get('/user/list', (req, res) => {
        const data = mock({
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            'list|1-10': [{
                'name': Random.ctitle(1, 5),
                'tel|+1': 13180857735
            }]
        });
        return res.json(data);
    });

    router.put('/user/add', (req, res) => {
        return res.json(200);
    });
};


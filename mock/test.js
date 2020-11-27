const Mock = require('mockjs');
const express = require('express');
const router = express.Router();
const { Random } = Mock;

router.use('/profile', (req, res) => {
    const data = Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|1-10': [{
            'name': Random.ctitle(1, 5),
            'tel|+1': 13180857733
        }]
    });
    console.log(data);
    return res.json(data);
});

module.exports = router;

const express = require('express');
const app = express();
const router = express.Router();

router.use('/test', require('./test'));

app.use('/api', router);

app.listen(3001, () => {
    console.log('listen on port 3001')
});

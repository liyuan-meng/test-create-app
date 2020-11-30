const express = require('express');
const app = express();
const router = express.Router();
const Mock = require('mockjs');
const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

const mockFileList = [];
fs.readdirSync('mock').forEach(item => {
    const mockPath = path.resolve(__dirname, item);
    if (typeof require(mockPath) === 'function') {
        mockFileList.push(mockPath)
    }
});

function registerRoutes(router) {
    mockFileList.forEach(mockPath => {
        require(mockPath)(router, Mock);
    })
}

function unRegisterRoutes(router) {
    router.stack.splice(0, router.stack.length);
    mockFileList.forEach(currentPath => {
        delete require.cache[currentPath];
    });
}

chokidar.watch(mockFileList).on('change', event => {
    unRegisterRoutes(router);
    registerRoutes(router);
    console.log(`${event} has changed!`);
});

registerRoutes(router);

app.use('/api', router);

app.listen(3001, () => {
    console.log('listen on port http://localhost:3001')
});

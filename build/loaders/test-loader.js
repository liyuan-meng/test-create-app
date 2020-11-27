const loaderUtils = require('loader-utils');

module.exports = function(source) {
    // console.log('source:', source);
    const options = loaderUtils.getOptions(this);
    console.log('options:', options);
    return source;
};

module.exports = {
    port: process.env.NODE_PORT || 3090,
    mongoose: {
        Promise: require('bluebird'), //mongoose promise library
        //connection: 'mongodb://localhost:27017/vendor',
         connection: 'mongodb://bobby:123456@ds117848.mlab.com:17848/ancat'
    },
};

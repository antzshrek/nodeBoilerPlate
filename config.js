module.exports = {
    port: process.env.NODE_PORT || 3090,
    mongoose: {
        Promise: require('bluebird'), //mongoose promise library
        connection: 'mongodb://localhost:27017/testing',
         //connection: 'mongodb://you_can provide your mlab db service url here.'
    },
};

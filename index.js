const config            = require('./config');

const mongoose = require('mongoose');

  mongoose.Promise = config.mongoose.Promise;
  
  mongoose.connect(config.mongoose.connection)
      .then(() => {
          console.log('Connected to mongodb!');
          require('./app.js');
      })
      .catch(err => {
          console.log(err);;                                                       
      });

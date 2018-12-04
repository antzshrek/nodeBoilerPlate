const   bcrypt            = require("bcrypt"),
        bodyParser        = require("body-parser"),
        compress          = require("compression"),
        cookieParser      = require("cookie-parser"),
        cors              = require('cors'),
        express           = require("express"),
        mongoose          = require("mongoose"),
        morgan            = require('morgan'),
	    multer            = require('multer'),
        session           = require("express-session"),
        logger            = require("morgan"),
        nodemon           = require("nodemon");
        
const   config = require('./config');

const   app = express();

        app.enabled('trust proxy');
            
        app.use(logger('dev'));
        app.use(compress());
            
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(express.static("public"));
        app.use(bodyParser.json());
        app.use(cookieParser());      
            
        app.use(function(req, res, next){
            if (req.session && req.session.userId)
            req.isLoggedIn = true;
            else
            req.isLoggedIn = false;
            next();
            });

        app.get("/", function (req, res) {
                res.json({status:200,info:"welcome!"})
        })

app.listen(config.port, () => {
    console.log('Express server listening on port ' + config.port);
    console.log('http://localhost:' + config.port);
});

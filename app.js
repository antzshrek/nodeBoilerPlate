
const   express           = require("express"),
        compress          = require("compression"),
        bodyParser        = require("body-parser"),
        cookieParser      = require("cookie-parser"),
        mongoose          = require("mongoose"),
        session           = require("express-session"),
        bcrypt            = require("bcrypt"),
        logger            = require("morgan"),
        config            = require('./config'),
        nodemon           = require("nodemon");
        const morgan = require('morgan');
        const cors = require('cors');
	const multer = require('multer');

    const app = express();
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

        //app.use('/', require('./routes/router'));
        app.get("/", function (req, res) {
            res.json({status:200,info:"welcome!"})
        })

app.listen(config.port, () => {
    console.log('Express server listening on port ' + config.port);
    console.log('http://localhost:' + config.port);
});




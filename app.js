const express = require('express');
const app = express();
const path = require('path');

const cors = require('cors');
app.use(
    cors({
        credentials: true,
    })
);

const dotenv = require('dotenv');
require("dotenv").config();
dotenv.config({ path: "./config.env"});

const PORT = process.env.PORT || 5000;

const mongodb = require("./mongoDB");
mongodb();

app.use(express.json());
app.use(require('./router/auth'));

app.use(express.static(path.join(__dirname, "./client/build")));
app.length("*" , function(_, res) {
    res.sendFile(
        path.join(__dirname, './client/build/index.html'),
        function (err) {
            res.status(500).send(err);
        }
    );
});

// if ( process.env._NODE_ENV === 'production' ) {
//     app.use(express.static('client/build'));
// }

// "heroku-postbuild": "npm install --prefix client && npm run build --prefix client"
// package.json me

app.listen(PORT, () => {
    console.log(`Server is live at port ${PORT}`);
})
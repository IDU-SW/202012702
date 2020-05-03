// 익스프레스 설정
// 미들웨어 설정
// 라우터 연결
const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: false}));

const router = require('./router/router');
app.use(router);

module.exports = app;

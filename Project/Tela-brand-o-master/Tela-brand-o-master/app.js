var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./public/routes/cadastro');
var usuariosRouter = require('./public/routes/usuarios');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/cadastro', indexRouter);
app.use('/usuarios', usuariosRouter);

module.exports = app;

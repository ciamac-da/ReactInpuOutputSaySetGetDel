const express = require('express')
const app     = express()

const session = require('express-session')

app.use( session({
  resave: true,
  saveUninitialized: true,
  secret: '1-2987921837b109287301827012873v78bds8a7d6asdashhdgv',
  cookie: {}
}) );

app.get( '/say',(req,res)=> {
  res.json(req.query);
});

app.get('/set',(req,res)=>{
  req.session.counter = req.session.counter + 1;
  req.session.data = req.query;
  res.json(req.session.counter);
});

app.get('/get',(req,res)=>{
  res.json(req.session.data);
});

app.get('/del',(req,res)=>{
  req.session.destroy();
  res.json('ok');
});

app.listen(9933);
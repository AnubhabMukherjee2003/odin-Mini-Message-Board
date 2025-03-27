const express = require('express');
const path = require('path');

const indexRouter = require('./routers/indexRouter');
const newRouter = require('./routers/newRouter');
const msgRouter = require('./routers/msgRouter');
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/new', newRouter);
app.use('/message', msgRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
const express = require('express');
const path = require('path');
const app = express();

const port = '3000';

app.use('/item/:id', express.static(path.join(__dirname, './../public')));


app.listen(port, () => {
  console.log(`ReBurke proxy listening on ${port}`);
})

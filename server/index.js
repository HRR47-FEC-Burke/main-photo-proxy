const express = require('express');
const path = require('path');
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');

const port = '3000';
const photoTarget = 'http://localhost:3001';
const sbTarget = 'http://localhost:3210';
const reviewsTarget = 'http://localhost:2625';
const slnTarget = 'http://localhost:3005';

app.use('/item/:id', express.static(path.join(__dirname, './../public')));

app.use('*/photo/api', createProxyMiddleware({ target: photoTarget, changeOrigin: true }));

app.use('*/sb/api', createProxyMiddleware({ target: sbTarget, changeOrigin: true }));

app.use('*/reviews/api', createProxyMiddleware({ target: reviewsTarget, changeOrigin: true }));

app.use('*/sln/api', createProxyMiddleware({ target: slnTarget, changeOrigin: true }));


app.listen(port, () => {
  console.log(`ReBurke proxy listening on ${port}`);
})

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Set target URL
const url = "";

app.use('/', createProxyMiddleware({
    target: url,
    changeOrigin: true
}));

app.listen(3000);
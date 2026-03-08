const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/', createProxyMiddleware({
  target: 'http://darknode.spxo.ru:20259',
  changeOrigin: true,
  ws: true, // enable websocket proxying too
}));

app.listen(process.env.PORT || 3000, () => {
  console.log('Proxy running');
});

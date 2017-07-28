'use strict'

const express = require('express');
const proxy = require('express-request-proxy');
const app = express();

app.use(express.static('./public'));

const PORT = process.env.PORT || 3000;

function proxyGitHub (request, response) {
  (proxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`
    }
  }))(request, response)
}

app.get('/github/*', proxyGitHub);

app.listen(PORT, function() {
  console.log('Listening on port ' + PORT);
})

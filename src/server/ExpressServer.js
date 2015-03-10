'use strict';

import express from 'express';
import App from './App';
import bodyParser from 'body-parser';
import config from './config';

var server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
  extended: false
}));
server.use('/assets', express.static('assets/'));
server.use('/dist', express.static('dist/'));
server.use(function (request, response) {
  App.render(request.path, config)
    .then(function (result) {
      response
        .set('content-type', 'text/html')
        .status(result.status)
        .send(result.html);
    })
    .catch(function (error) {
      console.log(error);
      response.status(500)
        .send(error);
    });
});
var port = 8090;
server.listen(port, function () {
  console.log('Server is listening on port '+port);
});

export default server;

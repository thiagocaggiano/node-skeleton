module.exports = function(app) {
  
  var ping = app.controllers.ping;
  
  app.get('/ping', ping.pong);
  
};
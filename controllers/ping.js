module.exports = function (app) {
    
    var PingController = {
        pong: function (req, res) {
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end("pong");
        }
    };
    
    return PingController;
};
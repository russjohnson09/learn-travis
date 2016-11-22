var port = process.env.PORT;
var ip = process.env.IP;
var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
  console.log("started request");
  if (require('./horriblesubs.js')
    ('/horriblesubs').handleRequest(req,res)) {
    return;
  }
  
  var path = url.parse(req.url);
  console.log(path);
  if (path.pathname === '/sms') {
    console.log('sms receipt');
    
  }
  if (req.body) {
      console.log(req.body);
  }
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Success');
  
}).listen(port,ip);
  console.log("started server");

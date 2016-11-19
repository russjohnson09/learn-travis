var port = process.env.PORT;
var ip = process.env.IP;
var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
  var path = url.parse(req.url);
  console.log('hello')
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

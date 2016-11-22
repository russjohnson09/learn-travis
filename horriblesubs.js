module.exports = function (prefix) {
    var module = {};
    
    module.handleRequest = function(req,res) {
        var http = require('http');
        var https = require('https');
        var url = require('url');
        console.log('horriblesubs');
        res.writeHead(200, {'Content-Type': 'text/plain'});

        
          var path = url.parse(req.url);
          console.log(path);
          if (path.pathname === prefix) {
              http.request({
                  'protocol': 'http:',
                  'host': 'horriblesubs.info',
                  'path': '/',
                  'method': 'GET'
              },function(horriblesubsresponse) {
                   horriblesubsresponse.on('data', function(chunk) {
                    console.log(chunk);
                  });
                  horriblesubsresponse.on('end', function() {
                    res.end('Success');
                    console.log('No more data in response.');
                  }); 
                 horriblesubsresponse.on('error', function(err) {
                     console.log(err);
                    res.end('Success');
                  }); 
              });
            console.log('sms receipt');
            
          }
          
          return true;
    }

    return module;
};
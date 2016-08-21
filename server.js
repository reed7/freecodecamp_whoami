var express = require("express");
var app = express();

app.get('/', (req, resp)=>{
    var result = {};
    result.ipaddress = req.ip.split(':');
    result.ipaddress = result.ipaddress[result.ipaddress.length-1]
    result.language = req.acceptsLanguages()[0];
    result.software = req.get('User-Agent');
    
    resp.end(JSON.stringify(result));
}).listen(8080, ()=>{
   console.log("Server started!"); 
});
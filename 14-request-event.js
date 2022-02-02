const http = require('http');
//OLD WAY OF CREATING A SERVER
// const server = http.createServer((req,res) => {
//  res.end("Welcome")
// })

//USING EVENT EMITTER API
const server = http.createServer();
//server emits request event

server.on('request', (req, res) => {
  res.end('welcome');
});
server.listen(5000);

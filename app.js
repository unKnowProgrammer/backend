const http = require("http");

http.createServer((request , response) => {
	response.write("Hello World");
	response.end();
}).listen(process.env.PORT)
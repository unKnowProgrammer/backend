const http = require("http");

http.createServer((request , response) => {
	response.write("Hello World");
}).listen(process.env.PORT)
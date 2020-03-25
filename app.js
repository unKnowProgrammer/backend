const http = require("http");

http.createServer((request , response) => {
	response.write("Hello World");
	switch(request.url){
		case "/":
		response.write("MAIN PAGE")
		break;

		case "/about":
		response.write("ABOUT PAGE")
		break;

		case "/contact":
		response.write("CONTACT PAGE")
		break;

		default:
		response.write("PAGE NOT FOUND")

	}
	response.end();
}).listen(process.env.PORT)
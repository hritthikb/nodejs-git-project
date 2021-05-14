const http = require("http");

http
    .createServer((req, res) => {
        switch (http.request.url){
            case "/":
                Response.writeHead(200,{
                    "Content-Type": "text/html",
                });
                Response.write("<h1> Home Page !! </h1>");
                Response.end();
                break;
            default:
                Response.writeHead(404,{
                    "Content-Type": "text/html",
                });
                Response.write("<p> 404 Page Not Found <p>");
                Response.end();
                break;

        }
        
    })
    .listen(8080);


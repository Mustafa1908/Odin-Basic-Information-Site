const { createServer } = require("node:http");
var fs = require("fs");
var url = require("url");
const hostname = "localhost";
const port = 8080;

const server = createServer((req, res) => {
  let fileUrl = url.parse(req.url, true);
  let fileLocation;

  if (fileUrl.path === "/") {
    fileLocation = "/index.html";
  } else if (fileUrl.path === "/about") {
    fileLocation = "/about.html";
  } else if (fileUrl.path === "/contact-me") {
    fileLocation = "/contact-me.html";
  }

  fs.readFile(`public${fileLocation}`, function (err, data) {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      return res.end("Page not found");
    }

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

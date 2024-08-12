const express = require("express");
const app = express();

app.use(function (req, res, next) {
  if (req.url !== "/" && req.url !== "/about" && req.url !== "/contact-me") {
    res.sendFile("public/404.html", { root: __dirname });
    return;
  }
  return next();
});

app.get("/", (req, res) => {
  res.sendFile("public/index.html", { root: __dirname });
});

app.get("/about", (req, res) =>
  res.sendFile("public/about.html", { root: __dirname })
);
app.get("/contact-me", (req, res) =>
  res.sendFile("public/contact-me.html", { root: __dirname })
);

const PORT = 8080;
app.listen(PORT, () =>
  console.log(`My first Express app - listening on port ${PORT}!`)
);

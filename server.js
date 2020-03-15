const express = require("express");
const path = require("path");
const app = express();
const port = process.env.Port || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);

app.listen(port,() => console.log(`Server started on localhost:${port}`));
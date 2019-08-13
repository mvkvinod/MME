const express = require("express");
const app = express();
const sign_up = require("./routes/sign_up");
const log_in = require("./routes/login");
const db = require("./config/DB");

//Initial route
app.get("/", (req, res) => {
  res.sendFile("./html/index.html", { root: __dirname });
});

//checking DB conection
db.authenticate()
  .then(() => console.log("DataBase connected from index.js"))
  .catch(err => console.log("Error at DB connection Index.js ::" + err));

app.use(express.json());

//route middleware
//Sign Up route
app.use("/api/signUp", sign_up);
//Login Route
app.use("/api/login", log_in);

// PORT
app.listen(1313, () => console.log("server running on PORT:1313 "));

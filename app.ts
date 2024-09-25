import express from "express";
import registerUser from "./Controllers/regester";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("<h1>Hi from Bun!</h1>");
});
app.post("/register", registerUser);

app.listen(3000, () => {
  console.log("Server Started!");
});

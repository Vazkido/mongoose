import mongoose from "mongoose";
import connectDB from "./db.js";
import dotenv from "dotenv";
import Customer from "./models/customerModel.js";
dotenv.config();

const app = express();

connectDB();

app.get("/:name/:email/:password", async (req, res) => {
  try {
    await Customer.create({
      name: req.params.name,
      email: req.params.email,
      password: req.params.password,
      gender: null,
    });
    res.send("User Created Successfully");
  } catch (error) {
    console.log(error);

    res.send("I failed");
  }
});
app.get("/find/:name", async (req, res) => {
  let users = await Customer.find({ name: req.params.name });
  res.json(users);
});
app.get("/", async (req, res) => {
  let users = await Customer.find();
  res.json(users);
});

app.listen(8080, () => {
  console.log("Server running on port 8080...");
});

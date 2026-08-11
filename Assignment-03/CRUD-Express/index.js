const express = require("express");
const app = express();
const fs = require("node:fs");
const path = require("node:path");

const filePath = path.resolve("Data.json");

function ReadFile() {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    if (!data.trim) {
      return { users: [] };
    }
    return JSON.parse(data);
  } catch (error) {
    return { users: [] };
  }
}
function WriteFile(data) {
  fs.writeFileSync(filePath, JSON.stringify(data), "utf8");
}

app.use(express.json());

app.get("/", (req, res, next) => {
  const data = ReadFile();
  const users = data.users;
  res.status(201).json({ message: "sucess operation", users });
});

app.post("/user", (req, res, next) => {
  let newUser = req.body;
  const data = ReadFile();
  const users = data.users;
  const isExist = users.some((user) => user.email === newUser.email);

  if (!isExist) {
    newUser = {
      id: Date.now(),
      ...newUser,
    };
    users.push(newUser);
    WriteFile(data);
    res.status(201).json({ message: "sucess operation", newUser });
  }
  res.status(404).json({ message: "User Email Is Already Exist" });
});

app.patch("/user{/:id}", (req, res, next) => {});

app.delete("/user{/:id}", (req, res, next) => {});

app.get("/user/getByName", (req, res, next) => {});

app.get("/user/filter", (req, res, next) => {});

app.listen("3000", () => {
  console.log("server running");
});

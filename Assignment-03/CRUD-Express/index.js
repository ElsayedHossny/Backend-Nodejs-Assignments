const express = require("express");
const app = express();
const fs = require("node:fs");
const path = require("node:path");

const filePath = path.resolve("Data.json");

function ReadFile() {
  try {
    const data = fs.readFileSync(filePath, "utf8");
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

app.get("/user/filter", (req, res, next) => {
  const minAge = Number(req.query.minAge);
  const data = ReadFile();
  const users = data.users;
  const userFilteration = users.filter((user) => user.age > minAge);
  if (userFilteration.length === 0) {
    return res.status(404).json({
      message: "User not found",
    });
  }
  res.status(201).json({
    message: "User Filtration depend on ages",
    userFilteration,
  });
});

app.get("/user/getByName", (req, res, next) => {
  const userName = req.query.name;
  const data = ReadFile();
  const users = data.users;
  const index = users.findIndex((user) => user.name == userName);
  if (index == -1) {
    return res.status(404).json({
      message: "User not found",
    });
  }
  const userByName = users[index];
  res.status(201).json({
    message: "User retrieved successfully",
    userByName,
  });
});

app.delete("/user{/:id}", (req, res, next) => {
  const { id } = req.params;
  const data = ReadFile();
  const users = data.users;
  const index = users.findIndex((user, ind) => user.id == id);
  if (index === -1) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  const deletedUser = users.splice(index, 1)[0];
  WriteFile(data);
  res.status(201).json({
    message: "User deleted successfully",
    deletedUser,
  });
});

app.patch("/user/:id", (req, res, next) => {
  const { id } = req.params;
  const data = ReadFile();
  const users = data.users;
  const index = users.findIndex((user) => user.id == id);
  if (index == -1) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  const updatedUser = {
    ...users[index],
    ...req.body,
  };
  users[index] = updatedUser;
  WriteFile(data);
  res.status(201).json({
    message: "User deleted successfully",
    updatedUser,
  });
});

app.get("/user/:id", (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  const data = ReadFile();
  const users = data.users;
  const index = users.findIndex((user) => user.id == id);
  if (index == -1) {
    return res.status(404).json({
      message: "User not found",
    });
  }
  const userById = users[index];
  res.status(201).json({
    message: "User retrieved successfully",
    userById,
  });
});

app.use((req, res) => {
  res.status(404).json({
    message: "User not found",
  });
});

app.listen("3000", () => {
  console.log("server running");
});

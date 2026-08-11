const fs = require("node:fs");
const http = require("node:http");
const port = 3000;
let Users = [];

try {
  Users = JSON.parse(fs.readFileSync("./Data.json", "utf8"));
} catch {
  Users = [];
}

http
  .createServer((req, res) => {
    const { url, method } = req;
    // Get All Users
    if ((url == "/users" || url == "/") && method == "GET") {
      res.setHeader("Content-Type", "application/json");
      res.end(` ${JSON.stringify(Users)}`);
    }
    //Update User
    else if (url == "/adduser" && method == "POST") {
      let NewUser;
      req.on("data", (chunk) => {
        NewUser = JSON.parse(chunk.toString());
      });

      req.on("end", () => {
        const { name } = NewUser;
        const isUserExists = Users.find((user) => user.email === NewUser.email);
        if (isUserExists) {
          res.writeHead(404, { "Content-Type": "application/utf8" });
          return res.end("User Already Exists please enter another email");
        }
        let CreateUser = {
          id: (Users[Users.length - 1]?.id ?? 0) + 1,
          ...NewUser,
        };
        Users.push(CreateUser);
        fs.writeFileSync("./Data.json", JSON.stringify(Users));
        console.log(`User ${name} added successfully`);
        res.end(`User ${name} added successfully`);
      });
    }
    // Add New Users
    else if (url.startsWith("/user/") && method == "PATCH") {
      const Id = url.split("/")[2];
      const oldUser = Users.find((user) => user.id == Id);
      if (!oldUser) {
        res.writeHead(404, { "Content-Type": "application/utf8" });
        console.log(`User is Not Found`);
        res.end(`User is Not Found `);
        return;
      } else {
        let UpdateUser;
        req.on("data", (chunk) => {
          UpdateUser = JSON.parse(chunk.toString());
        });
        req.on("end", () => {
          Object.assign(oldUser, UpdateUser);
          Users[Id - 1] = oldUser;
          const { name } = oldUser;
          fs.writeFileSync("./Data.json", JSON.stringify(Users));
          console.log(`User ${name} Updated successfully`);
          res.end(`User ${name} Updated successfully`);
        });
      }
    }
    //  Delete User
    else if (url.startsWith("/user/") && method == "DELETE") {
      const Id = url.split("/")[2];
      const deleteUser = Users.find((user) => user.id == Id);
      const index = Users.findIndex((user) => user.id == Id);
      console.log(index);
      if (!deleteUser) {
        res.writeHead(404, { "Content-Type": "application/utf8" });
        console.log(`User is Not Found`);
        res.end(`User is Not Found `);
        return;
      } else {
        if (index !== -1) {
          Users.splice(index, 1);
        }
        fs.writeFileSync("./Data.json", JSON.stringify(Users));
        console.log(`User is Deleted`);
        res.end(`User is Deleted`);
      }
    }
    //Get User BY ID
    else if (url.startsWith("/user/") && method == "GET") {
      const Id = url.split("/")[2];
      const userShow = Users.find((user) => user.id == Id);
      if (!userShow) {
        res.writeHead(404, { "Content-Type": "application/json" });
        console.log(`User is Not Found`);
        res.end(`User is Not Found `);
        return;
      } else {
        console.log(userShow);
        res.end(`${JSON.stringify(userShow)}`);
      }
    }
    // If Api Not Correct
    else {
      res.writeHead(404, { "Content-Type": "application/json" });
      console.log("Url OR Method Not Correct........");
      res.end("Url OR Method Not Correct........");
    }
  })
  .listen(port, () => {
    console.log("Server Is Run");
  });

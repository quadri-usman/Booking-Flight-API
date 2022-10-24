/Users
Creating users POST /users
Fetching users GET /users
Fetching a single user GET /users/:id
Updating a single user PUT /users/:id
Deleting a single user DELETE /users/:id

CRUD Operations
Cread
Read
Update
Delete

app.get("/users", (req, res) => {
// fetch all users
// send the user array as response to the client
return res.json({ users: users });
});
// create new user
app.post("/users", (req, res) => {
console.log(req.body.newUser);
// create a new user from a client request
// save new user to existing database
users.push(req.body.newUser);
console.log({ users });
// save updated data to users.json
// stringify the json data
let stringedData = JSON.stringify(users, null, 2);
// rewrite the file users.json
fs.writeFile("users.json", stringedData, (err) => {
if (err) {
return res.status(500).json({ message: err });
}
});
// send back a response to client
return res.status(200).json({ message: "new user added" });
});
// fetch single user
app.get("/users/:name", (req, res) => {
console.log({ params: req.params.name });
// fetch req.params.id
let name = req.params.name;
// find user with id
let findUser = users.find((user) => {
return String(user.name) === name;
});
//return user object as response
if (findUser) {
return res.status(200).json({ user: findUser });
} else {
// return a 404 error if user is not found
return res.status(400).json({ message: "User nor found" });
}
console.log(findUser);
});

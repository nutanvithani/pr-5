const user = require("../models/user.schema");

const signup = async (req, res) => {
  const User = new user(req.body);
  await User.save();
  res.status(201).json(User);
};

const deleteuser = async (req, res) => {
  let { id } = req.params;
  let data = await user.findByIdAndDelete(id);
  console.log(data);
  res.json({ message: "User deleted successfully" });
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const users = await user.findOne({ username: username });

  if (!users) {
    return res.status(401).json({ error: "Invalid username or password" });
  }
  const PasswordValid = users.password === password;

  if (!PasswordValid) {
    return res.status(401).json({ error: "Invalid username or password" });
  }
  res.json({ message: "Logged in successfully", users });
};

const getAllUsers = async (req, res) => {
  const users = await user.find();
  res.json(users);
};

module.exports = { signup, deleteuser, login, getAllUsers };

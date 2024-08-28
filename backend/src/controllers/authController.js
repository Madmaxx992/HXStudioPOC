const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/jwtConfig");

const hardcodedUsers = [
  { email: "admin@gmail.com", password: "admin123", role: "admin" },
  { email: "user@gmail.com", password: "user123", role: "user" },
];

const login = (req, res) => {
  const { email, password } = req.body;

  const user = hardcodedUsers.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ email: user.email, role: user.role }, jwtSecret, {
    expiresIn: "1h", // Token expires in 1 hour
  });

  res.status(200).json({ token, role: user.role });
};

module.exports = { login };

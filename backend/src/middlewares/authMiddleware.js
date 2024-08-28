const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/jwtConfig");

const authMiddleware = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // Get token from the Authorization header

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = decoded; // Store the decoded token in the request
    next();
  });
};

const authorize = (roles = []) => {
  return (req, res, next) => {
    if (roles.length && !roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden" });
    }
    next();
  };
};

module.exports = { authMiddleware, authorize };

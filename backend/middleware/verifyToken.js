const jwt = require("jsonwebtoken");

// Middleware to verify the token
const authenticateToken = (req, res, next) => {
  try {
    // const token = req.cookies.token; //TODO: uncomment this when done
    const token = req.headers.authorization;
    console.log("Token from cookies:", token);
    if (!token) {
      return res.status(403).json({ meessage: "token not exist" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // if (!decoded.userId) {
    //   return res.status(403).send({ message: "Access denied!" });
    // }

    console.log(decoded);

    req.payloadData = decoded;
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = authenticateToken;

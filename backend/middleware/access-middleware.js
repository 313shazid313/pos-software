const jwt = require("jsonwebtoken");

const accessMiddleware = (action) => {
  return async (req, res, next) => {
    try {
      // const token = req.cookies.token; //TODO: uncomment this when done
      const token = req.headers.authorization;
      // console.log("Token from cookies:", token);

      if (!token) {
        return res.status(403).json({ meessage: "token not exist" });
      }
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // console.log(decoded)
      // console.log(decoded.roleData.CanReadData);
      // console.log(action.CanReadData);

      if (
        decoded.roleData.CanReadData === true &&
        action.CanReadData === true
      ) {
        req.payloadData = decoded;
        next();
      } else if (
        decoded.roleData.CanAddData === true &&
        action.CanAddData === true
      ) {
        req.payloadData = decoded;
        next();
      } else if (
        decoded.roleData.CanEditData === true &&
        action.CanEditData === true
      ) {
        req.payloadData = decoded;
        next();
      } else if (
        decoded.roleData.CanDeleteData === true &&
        action.CanDeleteData === true
      ) {
        req.payloadData = decoded;
        next();
      } else {
        return res
          .status(403)
          .json({ meessage: `Access denyed for user : ${decoded.username}` });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
};

module.exports = accessMiddleware;

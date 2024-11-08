const express = require("express");
const sequelize = require("./config/database");
const rateLimit = require("express-rate-limit");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT;

// importing routes
const roleRoute = require("./router/role-router");
const userRoute = require("./router/user-router");
const productRoute = require("./router/product-router");
// importing routes

sequelize
  .sync()
  .then(() => {
    console.log("Database synced");
    app.listen(port, () => {
      console.log("Server is running on port", port);
    });
  })
  .catch((err) => console.error("Unable to connect to the database:", err));

const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  limit: 50,
  message: "Too manu request, please try again later",
});

app.use(rateLimiter);

app.use("/role", roleRoute);
app.use("/user", userRoute);
app.use("/product-route", productRoute);

const jwt = require("jsonwebtoken");
const secret = process.env.SECREAT_KEY;
console.log("test");
console.log(secret);
const auth = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    console.log(token);
    if (token) {
      token = token.split(" ")[1];
      console.log(token);
      const user = jwt.verify(token, secret);
      console.log(user);
      req.user = user.id;
    } else {
      res.status(401).send("Unauthorized");
      return; // Return to prevent further execution
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(400).send("Unauthorized");
  }
};

module.exports = auth;

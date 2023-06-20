const userSchema = require("../module/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = process.env.SECREAT_KEY;
console.log("test");
console.log(secret);
const createuser = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  try {
    const existinguser = await userSchema.findOne({ email });
    if (existinguser) {
      return res.status(400).json({
        message: "user already exist",
      });
    }
    const hashpassword = await bcrypt.hash(password, 10);

    const result = await userSchema.create({
      name: name,
      email: email,
      password: hashpassword,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, secret);

    res.status(201).json({
      result: result,
      token,
      message: "user created successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
    });
  }
};

const loginuser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    const existinguser = await userSchema.findOne({ email });
    if (!existinguser) {
      return res.status(404).json({
        message: "user not found",
        error: "user not found",
      });
    }
    const ispasswordcorrect = await bcrypt.compare(
      password,
      existinguser.password
    );
    if (!ispasswordcorrect) {
      return res.status(400).json({
        message: "invalid credentials",
        errr: "invalid credentials",
      });
    }
    const token = jwt.sign(
      { email: existinguser.email, id: existinguser._id },
      secret
    );
    res.status(200).json({
      result: existinguser,
      token,
      message: "login successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
      error: "something went wrong",
    });
  }
};

module.exports = {
  createuser,
  loginuser,
};

import userService from "../service/user.srvice.js";
import generateToken from "../utils/jwt.utils.js";

async function createUser(req, res) {
  try {
    const response = await userService.createUser({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    });

    return res.status(201).json({
      msg: "User created successfully",
      data: response,
      error: {},
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        msg: "Duplicate email",
        data: {},
        error: error.message,
      });
    }
    return res.status(500).json({
      msg: "Internal Server Error",
      data: {},
      error: error.message,
    });
  }
}

async function signin(req, res) {
  try {
    const response = await userService.signin({
      email: req.body.email,
      password: req.body.password,
    });
    const token = generateToken(response);
    return res.status(200).json({
      message: "Login successful",
      data: token,
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Internal Server Error",
      data: {},
      error: error.message,
    });
  }
}

export default {
  createUser,
  signin,
};

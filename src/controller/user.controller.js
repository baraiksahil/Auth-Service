import userService from "../service/user.srvice.js";

async function createUser(req, res) {
  try {
    const reponse = await userService.createUser({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    });

    return res.status(201).json({
      msg: "User created successfully",
      data: reponse,
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

export default {
  createUser,
};

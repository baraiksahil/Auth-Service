function validateUser(req, res, next) {
  if (!req.body?.name) {
    return res.status(400).json({
      msg: "name is required",
      data: {},
      error: error.message,
    });
  }
  if (!req.body?.email) {
    return res.status(400).json({
      msg: "email is required",
      data: {},
      error: error.message,
    });
  }
  if (!req.body?.password) {
    return res.status(400).json({
      msg: "password is required",
      data: {},
      error: error.message,
    });
  }
  next();
}

export default {
  validateUser,
};

import jwt from "jsonwebtoken";

function validateUser(req, res, next) {
  if (!req.body?.name) {
    return res.status(400).json({
      msg: "name is required",
      data: {},
    });
  }
  if (!req.body?.email) {
    return res.status(400).json({
      msg: "email is required",
      data: {},
    });
  }
  if (!req.body?.password) {
    return res.status(400).json({
      msg: "password is required",
      data: {},
    });
  }
  next();
}

function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({
      msg: "No token provided",
      data: {},
    });
  }

  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({
      msg: "Invalid or expired token",
      data: {},
      error: error.message,
    });
  }
}

export default {
  validateUser,
  verifyToken,
};

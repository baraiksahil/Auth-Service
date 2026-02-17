import jwt from "jsonwebtoken";

function generateToken(data) {
  return jwt.sign(
    {
      id: data._id,
      email: data.email,
    },
    process.env.SECRET_KEY,
    { expiresIn: process.env.JWT_EXPIRE },
  );
}

export default generateToken;

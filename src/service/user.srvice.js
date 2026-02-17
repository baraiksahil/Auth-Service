import userModel from "../model/user.model.js";
import bcrypt from "bcrypt";

async function createUser(data) {
  const response = await userModel.create(data);
  return response;
}

async function signin({ email, password }) {
  const response = await userModel.findOne({ email });
  if (!response) {
    throw new Error("User not found");
  }

  const isMatch = await bcrypt.compare(password, response.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }
  return response;
}

export default {
  createUser,
  signin,
};

import userModel from "../model/user.model.js";

async function createUser(data) {
  const reponse = await userModel.create(data);
  return reponse;
}

export default {
  createUser,
};

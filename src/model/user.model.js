import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true },
);

userSchema.pre("save", async function handleHashing() {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 10);
});

const user = mongoose.model("User", userSchema);
export default user;

import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    minlength: 3,
  },
  lastName: {
    type: String,
    default: "last name",
    maxlength: 20,
    trim: true,
  },
  location: {
    type: String,
    default: "my city",
    maxlength: 20,
    trim: true,
  },
});

export default mongoose.model("User", UserSchema);

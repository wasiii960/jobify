import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { CustomApiError } from "../errors/index.js";
const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new CustomApiError(
      "Please provide all values",
      StatusCodes.BAD_REQUEST
    );
  }
  const userAlreadyExist = await User.findOne({ email });
  if (userAlreadyExist) {
    throw new CustomApiError("Email already exists", StatusCodes.BAD_REQUEST);
  }
  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({
    user: {
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      name: user.name,
    },
    token,
  });
};
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new CustomApiError(
      "Please provide all values",
      StatusCodes.BAD_REQUEST
    );
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new CustomApiError("Invalid credentials", StatusCodes.UNAUTHORIZED);
  }
  const isPasswordMatch = await user.comparePassword(password);
  if (!isPasswordMatch) {
    throw new CustomApiError("Invalid credentials", StatusCodes.UNAUTHORIZED);
  }
  const token = user.createJWT();
  user.password = undefined;
  res.status(StatusCodes.OK).json({ user, token, location: user.location });
};
const updateUser = async (req, res) => {
  res.send("updateUser");
};

export { register, login, updateUser };

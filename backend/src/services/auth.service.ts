import { User, IUser } from "../models/User";
import bcrypt from "bcrypt";

const createUser = async (userData: Partial<IUser>): Promise<IUser> => {
  const hashedPass = await bcrypt.hash(userData.password!, 10);
  const user = new User({
    ...userData,
    password: hashedPass,
  });

  return await user.save();
};

const findUserByEmail = async (email: string): Promise<IUser | null> => {
  return await User.findOne({ email });
};

const findUserById = async (id: string): Promise<IUser | null> => {
  return await User.findById(id);
};

const isUserExist = async (
  email: string,
  username: string
): Promise<boolean> => {
  const existing = await User.findOne({ $or: [{ email }, { username }] });

  return !!existing;
};

export { createUser, findUserByEmail, findUserById, isUserExist };

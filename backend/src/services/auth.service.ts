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

const getAllUserService = async (): Promise<IUser[]> => {
  const userList = await User.find({});

  if (!userList) throw Error("User fetching error");

  return userList;
};

const getUserByIdService = async (userId: string): Promise<IUser> => {
  const user = await User.findById(userId);

  if (!user) throw Error("User fetching error");

  return user;
};

const editUserService = async (
  userId: string,
  userData: Partial<IUser>
): Promise<IUser> => {
  const newUser = await User.findByIdAndUpdate({ _id: userId }, userData, {
    new: true,
  });

  if (!newUser) throw Error("Error updating user.");

  return newUser;
};

export {
  createUser,
  findUserByEmail,
  findUserById,
  isUserExist,
  getAllUserService,
  getUserByIdService,
  editUserService,
};

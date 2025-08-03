import mongoose from "mongoose";
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

const getUserByIdService = async (userId: string): Promise<IUser | null> => {
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return null;
  }

  const user = await User.findById(userId);

  return user;
};

const editUserService = async (
  userId: string,
  userData: Partial<IUser>
): Promise<IUser | null> => {
  const newUser = await User.findByIdAndUpdate({ _id: userId }, userData, {
    new: true,
  });

  return newUser;
};

const deleteUserService = async (userId: string): Promise<IUser | null> => {
  const user = await User.findByIdAndDelete({ _id: userId });

  return user;
};

export {
  createUser,
  findUserByEmail,
  findUserById,
  isUserExist,
  getAllUserService,
  getUserByIdService,
  editUserService,
  deleteUserService,
};

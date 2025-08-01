import { User, IUser } from "../models/User";

const createUser = async (userData: Partial<IUser>): Promise<IUser> => {
  const user = new User(userData);

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

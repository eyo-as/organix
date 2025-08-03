import { Request, Response } from "express";
import {
  createUser,
  findUserByEmail,
  isUserExist,
  getAllUserService,
  getUserByIdService,
  editUserService,
} from "../services/auth.service";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = async (req: Request, res: Response) => {
  try {
    const { email, username, password } = req.body;
    const exists = await isUserExist(email, username);

    if (!email || !username || !password) {
      return res.status(400).json({
        message: "Please fill the required fields",
      });
    }

    if (exists) {
      return res.status(409).json({
        message: "Email or Username already exist",
      });
    }

    const newUser = await createUser({ email, username, password });

    res.status(201).json({
      message: "User created successfully",
      user: {
        id: newUser._id,
        email: newUser.email,
        username: newUser.username,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: "registering error" + error,
    });
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await findUserByEmail(email);

    if (!email || !password) {
      return res.status(400).json({
        message: "Please fill the required fields",
      });
    }

    if (!user) {
      return res.status(404).json({
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(404).json({
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      {
        userId: user._id,
      },
      process.env.jwt_secret as string,
      {
        expiresIn: "1d",
      }
    );

    res.status(200).json({
      message: "Logged in successfully",
      token: token,
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: "login error" + error,
    });
  }
};

const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await getAllUserService();
    if (!users) {
      return res.status(404).json({
        message: "Error fetching user data.",
      });
    }

    res.status(200).json({
      message: "Users retrived successfully.",
      users: users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: "User fetching error: " + error,
    });
  }
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await getUserByIdService(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found.",
      });
    }

    res.status(200).json({
      message: "User retrived successfully.",
      user: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: "User fetching error: " + error,
    });
  }
};

const editUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await getUserByIdService(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found.",
      });
    }

    const userData = req.body;
    const newUser = await editUserService(userId, userData);

    res.status(404).json({
      message: "User updated successfully.",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: "User updating error: " + error,
    });
  }
};

export { registerUser, loginUser, getAllUsers, getUserById, editUser };

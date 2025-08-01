import { Request, Response } from "express";
import {
  createUser,
  findUserByEmail,
  findUserById,
  isUserExist,
} from "../services/auth.service";

const registerUser = async (req: Request, res: Response) => {
  try {
    const { email, username, password } = req.body;
    const exists = await isUserExist(email, username);

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
      error,
    });
  }
};

import jwt from "jsonwebtoken";

const jwtSecret = process.env.jwt_secret;

export const generateToken = (userId: string): string => {
  return jwt.sign(
    {
      id: userId,
    },
    jwtSecret as string,
    {
      expiresIn: "7d",
    }
  );
};

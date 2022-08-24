import { NextFunction, Request, Response } from "express";
import generateToken from "../tools/tokenGenerator";

export default class UserController {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const token = generateToken(req.body);

      return res.status(201).json({ token })
    } catch (error) {
      next(error)
    }
  }
}
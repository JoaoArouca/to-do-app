import { NextFunction, Request, Response } from "express";

export default class UserController {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      

      return res.status(201).end()
    } catch (error) {
      next(error)
    }
  }
}
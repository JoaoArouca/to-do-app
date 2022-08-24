import { NextFunction, Request, Response } from "express";

export default class UserController {
  async register(req: Request, res: Response, next: NextFunction) {
    return res.status(201).end()
  }
}
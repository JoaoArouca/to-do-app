import { Router } from "express";
import UserController from "../../controller/user-controller";

const userRouter = Router();

const user = new UserController();

userRouter.post('/login');
userRouter.post('/register', user.register);

export default userRouter;
export interface IUser {
  id?: number,
  name: string,
  email: string,
  password: string,
}

export interface ITask {
  id?: number,
  description: string,
  status: string,
  user_id: number,
}
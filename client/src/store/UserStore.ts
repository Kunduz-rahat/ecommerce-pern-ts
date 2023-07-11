import { makeAutoObservable } from "mobx";
export interface IUser {
  password: string;
  name: string;
  role: string;
  
}
export default class UserStore {
  user: IUser[] =[] ;
  constructor() {
    
    makeAutoObservable(this);
  }
}

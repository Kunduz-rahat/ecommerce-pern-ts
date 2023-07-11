import { action, computed, makeAutoObservable, observable } from "mobx";

export type IUser = {
  name: string;
  password: string;
  role: string;
};

export  class UserStore {
  _user?: IUser |null;
  _isAuth?: boolean;
  constructor() {
    this._isAuth = true;
    this._user = null;
    makeAutoObservable(this, {
      _user: observable,
      _isAuth: observable,
      setIsAuth: action,
      setUser: action,
      isAuth: computed,
      user: computed,
    });
  }

  setIsAuth(bool: boolean) {
    this._isAuth = bool;
  }
  setUser(user: any) {
    this._user = user;
  }
  get isAuth() {
    return this._isAuth;
  }
  get user() {
    return this._user;
  }
}
export default new UserStore();
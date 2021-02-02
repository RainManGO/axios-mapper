export interface LoginModel {
  token: string;
}

export interface LoginRoot {
  code: number;
  msg: string;
  data: LoginModel;
  success: boolean;
}

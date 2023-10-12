export class UserLoginDto {
  email: string;
  password: string;
  constructor(payload: Partial<UserLoginDto>) {
    this.email = payload.email;
    this.password = payload.password;
  }
}

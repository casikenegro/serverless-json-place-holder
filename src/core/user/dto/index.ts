export class UserLoginDto {
  email: string;
  password: string;
  constructor(payload: Partial<UserLoginDto>) {
    this.email = payload.email;
    this.password = payload.password;
  }
}

export class UserDto {
  id: number | null;
  name: string;
  email: string;
  password: string;
  role: string;
  constructor(payload: Partial<UserDto>) {
    this.id = payload.id;
    this.name = payload.name;
    this.email = payload.email;
    this.password = payload.password;
    this.role = payload.role;
  }
}

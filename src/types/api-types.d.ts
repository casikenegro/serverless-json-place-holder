interface Token {
  token: String;
}
export interface SuccessLogin {
  result: Token;
}

export interface BodyLogin {
  email: string;
  password: string;
}

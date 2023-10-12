import { UserLoginDto } from "../../user/dto";
import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserRepository } from "src/core/user/repository/user.repository";

export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}
  public async login(payload: UserLoginDto) {
    const user = await this.userRepository.findByEmail(payload.email);
    const isMatch = bcrypt.compareSync(payload.password, user.password);
    if (isMatch) {
      const token = jwt.sign(
        { id: user.id, role: user.roleId },
        process.env.SECRET_KEY,
        {
          expiresIn: process.env.EXPIRES_IN,
        }
      );
      return { token: token };
    }
    return { message: "invalid password" };
  }
}

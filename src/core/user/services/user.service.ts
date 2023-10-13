import { UserDBEntity } from "../entities";
import { UserRepository } from "../repository/user.repository";
import bcrypt from "bcryptjs";
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  public findAll() {
    return this.userRepository.findAll();
  }
  public findOne(id: number) {
    return this.userRepository.findOne(id);
  }
  public findUserPosts(id: number) {
    return this.userRepository.findUserPosts(id);
  }
  public async findUserPostById(id: number, userId: number) {
    const post = await this.isUserPost(id, userId);
    return post || { message: "invalid post" };
  }
  public async findCommentsByPostId(id: number, userId: number) {
    const post = await this.isUserPost(id, userId);
    if (!post) {
      return { message: "invalid post" };
    }
    return this.userRepository.findCommentsByPostId(id);
  }
  public async isUserPost(id: number, userId: number) {
    const post = await this.userRepository.findUserPostById(id);
    return Number(post?.userId) === userId ? post : undefined;
  }
  public getRegisterUsers() {
    return this.userRepository.getRegisterUsers();
  }
  public findById(id: number) {
    return this.userRepository.findById(id);
  }

  public async add(payload: UserDBEntity) {
    const usersJsonPlaceHolder = await this.userRepository.findAll();
    if (!usersJsonPlaceHolder) {
      return { message: "place holder not found" };
    }
    const existInPlaceHolder = usersJsonPlaceHolder.find((user) => {
      return user.email === payload.email;
    });
    if (!existInPlaceHolder) {
      return { message: "email not exist" };
    }
    if (await this.userRepository.findByEmail(existInPlaceHolder.email)) {
      return { message: "user exist in db" };
    }
    payload.password = bcrypt.hashSync(payload.password, 8);
    return this.userRepository.create(payload);
  }
}

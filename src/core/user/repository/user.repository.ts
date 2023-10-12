import prisma from "src/db";
import * as utils from "../../../utils";
import { PostEntity, UserDBEntity, UserEntity } from "../entities";
import { CommentEntity } from "../entities/comment.entity";

export class UserRepository {
  public async findAll(): Promise<UserEntity[]> {
    const response: UserEntity[] = await utils.request(utils.urls.USERS);
    return response;
  }
  public async findOne(id: number): Promise<UserEntity> {
    const response: UserEntity = await utils.request(
      `${utils.urls.USERS}/${id}`
    );
    return response;
  }
  public async findUserPosts(id: number): Promise<PostEntity[]> {
    const response: PostEntity[] = await utils.request(
      `${utils.urls.USERS}/${id}/posts`
    );
    return response;
  }
  public async findUserPostById(id: number): Promise<PostEntity> {
    const response: PostEntity = await utils.request(
      `${utils.urls.POSTS}/${id}`
    );
    return response;
  }
  public async findCommentsByPostId(id: number): Promise<CommentEntity> {
    const response: CommentEntity = await utils.request(
      `${utils.urls.POSTS}/${id}/comments`
    );
    return response;
  }
  public async create(payload: UserDBEntity): Promise<UserDBEntity> {
    return prisma.user.create({ data: payload });
  }

  public async findByEmail(email: string): Promise<UserDBEntity> {
    return prisma.user.findUnique({ where: { email } });
  }
  public async findById(id: number): Promise<UserDBEntity> {
    return prisma.user.findUnique({ where: { id } });
  }
  public async getRegisterUsers(): Promise<UserDBEntity[]> {
    return prisma.user.findMany();
  }
}

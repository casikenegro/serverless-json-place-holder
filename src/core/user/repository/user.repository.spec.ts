import { PostEntity, UserDBEntity, UserEntity } from "../entities";
import { CommentEntity } from "../entities/comment.entity";
import { UserRepository } from "./user.repository";

describe("UserRepository", () => {
  let repository: UserRepository;

  beforeEach(() => {
    repository = new UserRepository();
  });

  test("findAll", () => {
    const mockEntities = [new UserEntity({})];
    const mockFindAll = jest.fn().mockReturnValue(mockEntities);
    repository.findAll = mockFindAll;
    expect(repository.findAll()).toEqual(mockEntities);
  });

  test("findOne", () => {
    const mockEntity = new UserEntity({});
    const mockFindOne = jest.fn().mockReturnValue(mockEntity);
    repository.findOne = mockFindOne;
    expect(repository.findOne(expect.anything())).toEqual(mockEntity);
  });
  test("findUserPosts", () => {
    const mockEntities = [new PostEntity({})];
    const mockFindUserPosts = jest.fn().mockReturnValue(mockEntities);
    repository.findAll = mockFindUserPosts;
    expect(repository.findAll()).toEqual(mockEntities);
  });

  test("findUserPostById", () => {
    const mockEntity = new PostEntity({});
    const mockfindUserPostById = jest.fn().mockReturnValue(mockEntity);
    repository.findUserPostById = mockfindUserPostById;
    expect(repository.findUserPostById(expect.anything())).toEqual(mockEntity);
  });

  test("findCommentsByPostId", () => {
    const mockEntities = [new CommentEntity({})];

    const mockfindCommentsByPostId = jest.fn().mockReturnValue(mockEntities);
    repository.findCommentsByPostId = mockfindCommentsByPostId;
    expect(repository.findCommentsByPostId(expect.anything())).toEqual(
      mockEntities
    );
  });

  test("create", () => {
    const mockEntity = new UserDBEntity({});
    const mockCreate = jest.fn().mockReturnValue(mockEntity);
    repository.create = mockCreate;
    expect(repository.create(mockEntity)).toEqual(mockEntity);
  });

  test("findByEmail", () => {
    const mockEntity = new UserDBEntity({});
    const mockFindByEmail = jest.fn().mockReturnValue(mockEntity);
    repository.findByEmail = mockFindByEmail;
    expect(repository.findByEmail(expect.anything().string)).toEqual(
      mockEntity
    );
  });

  test("findById", () => {
    const mockEntity = new UserDBEntity({});
    const mockFindById = jest.fn().mockReturnValue(mockEntity);
    repository.findById = mockFindById;
    expect(repository.findById(expect.anything().number)).toEqual(mockEntity);
  });

  test("getRegisterUsers", () => {
    const mockEntities = [new UserDBEntity({})];

    const mockGetRegisterUsers = jest.fn().mockReturnValue(mockEntities);
    repository.getRegisterUsers = mockGetRegisterUsers;
    expect(repository.getRegisterUsers()).toEqual(mockEntities);
  });
});

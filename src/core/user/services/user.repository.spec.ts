jest.mock("../repository/user.repository");
import { UserRepository } from "../repository/user.repository";
import { UserService } from "./user.service";

describe("UserService", () => {
  let service: UserService;

  beforeEach(() => {
    service = new UserService(new UserRepository());
  });
  test("findAll", () => {
    expect(service.findAll()).toHaveBeenCalled;
  });

  test("findOne", () => {
    expect(service.findOne(expect.anything())).toHaveBeenCalled;
  });
  test("findUserPosts", () => {
    expect(service.findUserPosts(expect.anything())).toHaveBeenCalled;
  });

  test("findUserPostById", () => {
    expect(service.findUserPostById(expect.anything(), expect.anything()))
      .toHaveBeenCalled;
  });

  test("findCommentsByPostId", () => {
    expect(service.findCommentsByPostId(expect.anything(), expect.anything()))
      .toHaveBeenCalled;
  });

  test("add", () => {
    expect(service.add(expect.anything())).toHaveBeenCalled;
  });
  test("findById", () => {
    expect(service.findById(expect.anything())).toHaveBeenCalled;
  });
  test("getRegisterUsers", () => {
    expect(service.getRegisterUsers()).toHaveBeenCalled;
  });
});

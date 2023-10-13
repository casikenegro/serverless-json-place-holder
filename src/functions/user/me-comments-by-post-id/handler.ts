import { formatJSONResponse } from "@libs/api-gateway";
import { APIGatewayProxyEvent } from "aws-lambda";
import { RoleRepository } from "src/core/role/repository/role.repository";
import { UserRepository } from "src/core/user/repository/user.repository";
import { UserService } from "src/core/user/services/user.service";
import { ValidationToken } from "src/middlewares/validation";
import { Context } from "vm";

export const main = async (event: APIGatewayProxyEvent, _context: Context) => {
  try {
    const { id } = event.pathParameters;
    const user = ValidationToken(event.headers["Authorization"]);
    const userService = new UserService(
      new UserRepository(),
      new RoleRepository()
    );
    const response = await userService.findCommentsByPostId(
      Number(id),
      Number(user.id)
    );
    return formatJSONResponse({
      result: response,
    });
  } catch (error) {
    return formatJSONResponse({
      error: error.message,
      statusCode: 500,
    });
  }
};

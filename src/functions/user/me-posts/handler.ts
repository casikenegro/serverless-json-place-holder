import { formatJSONResponse } from "@libs/api-gateway";
import { ValidationToken } from "src/middlewares/validation";
import { UserService } from "src/core/user/services/user.service";
import { UserRepository } from "src/core/user/repository/user.repository";
import { APIGatewayProxyEvent } from "aws-lambda";
import { Context } from "vm";

export const main = async (event: APIGatewayProxyEvent, _context: Context) => {
  try {
    const user = ValidationToken(event.headers["Authorization"]);
    const userService = new UserService(new UserRepository());
    const response = await userService.findUserPosts(Number(user.id));
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

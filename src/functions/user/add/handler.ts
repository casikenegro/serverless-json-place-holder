import { formatJSONResponse } from "@libs/api-gateway";
import { APIGatewayProxyEvent } from "aws-lambda";
import { UserDBEntity } from "src/core/user/entities";
import { UserRepository } from "src/core/user/repository/user.repository";
import { UserService } from "src/core/user/services/user.service";
import { ValidationToken } from "src/middlewares/validation";
import { Context } from "vm";

export const main = async (event: APIGatewayProxyEvent, _context: Context) => {
  try {
    const user = ValidationToken(event.headers["Authorization"]);
    if (user.role != 1) {
      return formatJSONResponse({
        result: { message: "forbidden" },
        statusCode: 401,
      });
    }
    const body = JSON.parse(event.body);
    const userService = new UserService(new UserRepository());
    const response = await userService.add(new UserDBEntity(body));
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

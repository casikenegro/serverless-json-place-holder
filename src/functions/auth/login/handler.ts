import { formatJSONResponse } from "@libs/api-gateway";
import { APIGatewayProxyEvent } from "aws-lambda";
import { UserLoginDto } from "src/core/user/dto";
import { AuthService } from "src/core/auth/services/user.service";
import { Context } from "vm";
import { UserRepository } from "src/core/user/repository/user.repository";

export const main = async (event: APIGatewayProxyEvent, _context: Context) => {
  try {
    const body = JSON.parse(event.body);
    const userService = new AuthService(new UserRepository());
    const response = await userService.login(new UserLoginDto(body));
    return formatJSONResponse({
      result: response,
    });
  } catch (error) {
    return formatJSONResponse({
      error: error.message,
    });
  }
};

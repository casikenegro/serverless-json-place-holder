import { formatJSONResponse } from "@libs/api-gateway";
import { APIGatewayProxyEvent } from "aws-lambda";
import { RoleRepository } from "src/core/role/repository/role.repository";
import { RoleService } from "src/core/role/services/role.service";
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
    const roleService = new RoleService(new RoleRepository());
    const response = await roleService.findAll();
    return formatJSONResponse({
      result: response,
    });
  } catch (error) {
    return formatJSONResponse({
      error: error.message,
    });
  }
};

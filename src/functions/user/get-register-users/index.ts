import { handlerPath } from "@libs/handler-resolver";

export const getRegisterUsers =  {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "get",
        path: "users",
      },
    },
  ],
};

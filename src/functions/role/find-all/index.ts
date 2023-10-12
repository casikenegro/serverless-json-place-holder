import { handlerPath } from "@libs/handler-resolver";

export const findAllRole =  {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "get",
        path: "roles",
      },
    },
  ],
};

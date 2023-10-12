import { handlerPath } from "@libs/handler-resolver";

export const addRole = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "post",
        path: "roles",
      },
    },
  ],
};

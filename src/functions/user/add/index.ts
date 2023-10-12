import { handlerPath } from "@libs/handler-resolver";

export const add =  {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "post",
        path: "users",
      },
    },
  ],
};

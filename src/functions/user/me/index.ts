import { handlerPath } from "@libs/handler-resolver";

export const me =  {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "get",
        path: "me",
      },
    },
  ],
};

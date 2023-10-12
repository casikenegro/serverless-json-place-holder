import { handlerPath } from "@libs/handler-resolver";

export const findOneRole =  {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "get",
        path: "roles/{id}",
      },
    },
  ],
};

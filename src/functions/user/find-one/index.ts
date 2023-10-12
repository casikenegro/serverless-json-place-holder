import { handlerPath } from "@libs/handler-resolver";

export const findOne =  {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "get",
        path: "users-json-place-holder/{id}",
      },
    },
  ],
};

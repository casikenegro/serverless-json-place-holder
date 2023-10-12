import { handlerPath } from "@libs/handler-resolver";

export const login = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "post",
        path: "login",
        responses: {
          200: {
            description: "success Login",
            bodyType: "BodyLogin",
          },
        },
      },
    },
  ],
};

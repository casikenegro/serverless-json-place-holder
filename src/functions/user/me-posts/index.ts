import { handlerPath } from "@libs/handler-resolver";

export const mePosts = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "get",
        path: "/me/posts",
      },
    },
  ],
};

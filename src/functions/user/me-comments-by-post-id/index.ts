import { handlerPath } from "@libs/handler-resolver";

export const meCommentsByPostId =  {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "get",
        path: "/me/posts/{id}/comments",
      },
    },
  ],
};

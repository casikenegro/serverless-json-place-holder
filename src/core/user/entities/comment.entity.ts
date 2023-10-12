export class CommentEntity {
  id: number;
  PostId: string;
  title: string;
  body: string;
  email: string;
  constructor(payload: Partial<CommentEntity>) {
    this.id = payload.id;
    this.PostId = payload.PostId;
    this.title = payload.title;
    this.body = payload.body;
    this.email = payload.email
  }
}

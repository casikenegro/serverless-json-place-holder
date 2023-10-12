export class PostEntity {
  id: number;
  userId: string;
  title: string;
  body: string;
  constructor(payload: Partial<PostEntity>) {
    this.id = payload.id;
    this.userId = payload.userId;
    this.title = payload.title;
    this.body = payload.body;
  }
}

export class RoleEntity {
  id: number;
  name: string;
  constructor(payload: Partial<RoleEntity>) {
    this.id = payload.id;
    this.name = payload.name;
  }
}

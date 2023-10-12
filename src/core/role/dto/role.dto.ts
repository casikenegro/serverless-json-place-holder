export class RoleDto {
  id: number | null;
  name: string;
  constructor(payload: Partial<RoleDto>) {
    this.id = payload.id;
    this.name = payload.name;
  }
}

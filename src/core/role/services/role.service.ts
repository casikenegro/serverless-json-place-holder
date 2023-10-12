import { RoleDto } from "../dto/role.dto";
import { RoleRepository } from "../repository/role.repository";

export class RoleService {
  constructor(private readonly roleRepository: RoleRepository) {}
  public findAll() {
    return this.roleRepository.findAll();
  }
  public findOne(id: number) {
    return this.roleRepository.findOne(id);
  }

  public create(payload: RoleDto) {
    return this.roleRepository.create(payload);
  }
}

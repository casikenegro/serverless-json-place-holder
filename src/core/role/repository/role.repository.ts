import prisma from "../../../db";
import { RoleEntity } from "../entities/role.entity";
import { RoleDto } from "../dto/role.dto";

export class RoleRepository {
  public async findAll(): Promise<RoleEntity[]> {
    const response: RoleEntity[] = await prisma.role.findMany();
    return response;
  }
  public async findOne(id: number): Promise<RoleEntity> {
    const response: RoleEntity = await prisma.role.findUnique({
      where: { id },
    });
    return response;
  }
  public async findByName(name: string): Promise<RoleEntity> {
    const response: RoleEntity = await prisma.role.findUnique({
      where: { name },
    });
    return response;
  }
  public async create(payload: RoleDto): Promise<RoleEntity> {
    return prisma.role.create({ data: payload });
  }
}

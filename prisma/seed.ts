import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcryptjs";

const prisma = new PrismaClient();
async function main() {
  const admin = await prisma.role.upsert({
    where: { name: "admin" },
    update: {},
    create: {
      name: "admin",
    },
  });
  const password =  bcrypt.hashSync("123456", 8);
  await prisma.user.upsert({
    where: { email: "admin@prisma.io" },
    update: {},
    create: {
      email: "admin@prisma.io",
      name: "admin",
      roleId: admin.id,
      password: password,
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    await prisma.$disconnect();
    process.exit(1);
  });

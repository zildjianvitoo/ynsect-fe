const { PrismaClient } = require("@prisma/client");

const prismadb = new PrismaClient();

async function createCategory() {
  await prismadb.agendaCategory.createMany({
    data: [
      {
        name: "PREPARATION",
      },
      {
        name: "INPROGRESS",
      },
      {
        name: "DONE",
      },
    ],
  });
}

createCategory();

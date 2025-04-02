import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const seedCategories = async () => {
  await prisma.category.createMany({
    data: [
      {
        id: '664813cc6fe803e9128d7fae',
        title: 'Development',
        description: 'Developments Courses',
        thumbnail: 'development.jpg',
      }
    ],
    skipDuplicates: true,
  })

  console.log('✅ Categories seeded')
}

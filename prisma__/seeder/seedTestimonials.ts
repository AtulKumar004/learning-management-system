import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const seedTestimonials = async () => {
  await prisma.testimonial.createMany({
    data: [
      {
        id: '663a0a05bfe65e5778eedf58',
        content: 'Great course! I learned a lot.',
        rating: 5,
        courseId: '6648184a6fe803e9128d7fba',
        userId: '663a0b36bfe65e5778eedf7e'
      },
      {
        id: '664acd311387e2ad2e8be48b',
        content: 'What a JavaScript Course, Awesome!!!',
        rating: 5,
        courseId: '664aca881387e2ad2e8be484',
        userId: '664accf41387e2ad2e8be488'
      },
      {
        id: '664af61c1387e2ad2e8be4ad',
        content: 'One of the best JS Course!!!',
        rating: 4,
        courseId: '664aca881387e2ad2e8be484',
        userId: '664adddc1387e2ad2e8be4a0'
      }
    ],
    skipDuplicates: true,
  })

  console.log('✅ Testimonials seeded')
}

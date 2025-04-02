import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const seedEnrollments = async () => {
  const enrollments = [
    {
      id: '663a0a2ebfe65e5778eedf60',
      enrollmentDate: new Date('2024-04-20'),
      completionDate: new Date('2024-05-15'),
      status: 'complete',
      method: 'paypal',
      courseId: '6648184a6fe803e9128d7fba',
      studentId: '663a0b36bfe65e5778eedf7e',
    },
    {
      id: '664acbd81387e2ad2e8be486',
      enrollmentDate: new Date('2024-04-20'),
      completionDate: new Date('2024-05-15'),
      status: 'complete',
      method: 'stripe',
      courseId: '664aca881387e2ad2e8be484',
      studentId: '664accf41387e2ad2e8be488',
    },
    {
      id: '664adedb1387e2ad2e8be4a4',
      enrollmentDate: new Date('2024-04-20'),
      completionDate: new Date('2024-05-15'),
      status: 'complete',
      method: 'stripe',
      courseId: '664aca881387e2ad2e8be484',
      studentId: '664adddc1387e2ad2e8be4a0',
    }
  ]

  await prisma.enrollment.createMany({
    data: enrollments,
    skipDuplicates: true,
  })

  console.log('✅ Enrollments seeded')
}

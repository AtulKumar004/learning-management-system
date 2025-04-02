import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const seedReports = async () => {
  await prisma.report.createMany({
    data: [
      {
        id: '663a0ae8bfe65e5778eedf6d',
        studentId: '66504fc6171d3fa703e7e05b',
        courseId: '664aca881387e2ad2e8be484',
        quizAssessmentId: '663b144d94bdaddfbf619390',
        totalCompletedLessons: [
          '663a0806bfe65e5778eedf35',
          '663a0806bfe65e5778eedf36'
        ],
        totalCompletedModules: [
          '663a0893bfe65e5778eedf3c'
        ]
      }
    ],
    skipDuplicates: true,
  })

  console.log('✅ Reports table seeded')
}

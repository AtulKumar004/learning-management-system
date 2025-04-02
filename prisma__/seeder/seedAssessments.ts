import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const seedAssessments = async () => {
  const assessmentId = '663b144d94bdaddfbf619390'

  await prisma.assessment.create({
    data: {
      id: assessmentId,
      otherMarks: 13,
      items: {
        create: [
          {
            quizId: '663a0900bfe65e5778eedf43',
            attempted: true,
            options: {
              create: [
                { option: 'option A', isCorrect: true, isSelected: true },
                { option: 'option B', isCorrect: false, isSelected: false },
                { option: 'option C', isCorrect: false, isSelected: false },
                { option: 'option D', isCorrect: false, isSelected: false }
              ]
            }
          },
          {
            quizId: '663a0900bfe65e5778eedf44',
            attempted: false,
            options: {
              create: [
                { option: 'option A', isCorrect: true, isSelected: true },
                { option: 'option A', isCorrect: true, isSelected: true },
                { option: 'option A', isCorrect: true, isSelected: true },
                { option: 'option A', isCorrect: true, isSelected: true }
              ]
            }
          },
          {
            quizId: '663a0900bfe65e5778eedf45',
            attempted: true,
            options: {
              create: [
                { option: 'option A', isCorrect: false, isSelected: false },
                { option: 'option B', isCorrect: false, isSelected: false },
                { option: 'option C', isCorrect: false, isSelected: true },
                { option: 'option D', isCorrect: true, isSelected: false }
              ]
            }
          },
          {
            quizId: '663a0900bfe65e5778eedf46',
            attempted: false,
            options: {
              create: [
                { option: 'option A', isCorrect: true, isSelected: true },
                { option: 'option A', isCorrect: true, isSelected: true },
                { option: 'option A', isCorrect: true, isSelected: true },
                { option: 'option A', isCorrect: true, isSelected: true }
              ]
            }
          }
        ]
      }
    }
  })

  console.log('✅ Assessments seeded')
}

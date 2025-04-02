import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const seedQuizAssessment = async () => {
  const assessmentId = '663b144d94bdaddfbf619390'

  await prisma.quizAssessment.create({
    data: {
      id: assessmentId,
      mark: 15,
      noc: 3,
      userId: '',
      courseId: '',
      items: {
        create: [
          {
            quizId: '663a0900bfe65e5778eedf43',
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
            quizId: '663a0900bfe65e5778eedf43',
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
            quizId: '663a0900bfe65e5778eedf43',
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
            quizId: '663a0900bfe65e5778eedf43',
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

  console.log('✅ Quiz Assessment seeded')
}

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const seedQuizzes = async () => {
  const quizzes = [
    {
      id: '663a0900bfe65e5778eedf43',
      question: 'What is the capital of France?',
      description: 'Test your knowledge about world capitals.',
      explanations: 'Paris is the capital of France.',
      mark: 5,
      slug: 'capital-of-france',
      options: [
        { text: 'Paris', isCorrect: true },
        { text: 'London', isCorrect: false },
        { text: 'Berlin', isCorrect: false },
        { text: 'Rome', isCorrect: false }
      ]
    },
    {
      id: '663a0900bfe65e5778eedf44',
      question: 'Which of the following is a programming language?',
      description: 'Identify the programming language among the options.',
      explanations: 'Python is a programming language.',
      mark: 5,
      slug: 'programming-language',
      options: [
        { text: 'HTML', isCorrect: false },
        { text: 'CSS', isCorrect: false },
        { text: 'Python', isCorrect: true },
        { text: 'Photoshop', isCorrect: false }
      ]
    },
    {
      id: '663a0900bfe65e5778eedf45',
      question: 'What does HTML stand for?',
      description: 'Choose the correct expansion of HTML.',
      explanations: 'HTML stands for Hyper Text Markup Language.',
      mark: 5,
      slug: 'html-expansion',
      options: [
        { text: 'Hyper Text Markup Language', isCorrect: true },
        { text: 'Highly Technological Markup Language', isCorrect: false },
        { text: 'Hyperlink Text Markup Language', isCorrect: false },
        { text: 'Hyper Tech Markup Language', isCorrect: false }
      ]
    },
    {
      id: '663a0900bfe65e5778eedf46',
      question: 'What is 2 + 2?',
      description: 'Solve the basic arithmetic question.',
      explanations: '2 + 2 equals 4.',
      mark: 5,
      slug: 'basic-arithmetic',
      options: [
        { text: '3', isCorrect: false },
        { text: '4', isCorrect: true },
        { text: '5', isCorrect: false },
        { text: '6', isCorrect: false }
      ]
    },
    {
      id: '663a0900bfe65e5778eedf47',
      question: 'What is the symbol for the element Iron?',
      description: 'Identify the chemical symbol for Iron.',
      explanations: 'The chemical symbol for Iron is Fe.',
      mark: 5,
      slug: 'iron-element',
      options: [
        { text: 'Fe', isCorrect: true },
        { text: 'Ir', isCorrect: false },
        { text: 'I', isCorrect: false },
        { text: 'In', isCorrect: false }
      ]
    }
  ]

  for (const quiz of quizzes) {
    await prisma.quiz.create({
      data: {
        id: quiz.id,
        question: quiz.question,
        description: quiz.description,
        explanations: quiz.explanations,
        mark: quiz.mark,
        slug: quiz.slug,
        options: {
          create: quiz.options.map(opt => ({
            text: opt.text,
            isCorrect: opt.isCorrect
          }))
        }
      }
    })
  }

  console.log('✅ Quizzes and options seeded')
}

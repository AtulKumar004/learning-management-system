import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const seedQuizSet = async () => {
  const sets = [
    {
      id: '663a096ebfe65e5778eedf4a',
      title: 'Python Basics Quiz Set',
      description: 'Test your knowledge about Python fundamentals.',
      mark: 15,
      slug: 'python-basics-quiz',
      status: 'active',
      quizIds: [
        '664840476fe803e9128d7fe2',
        '663a0900bfe65e5778eedf44',
        '663a0900bfe65e5778eedf45'
      ]
    },
    {
      id: '663a096ebfe65e5778eedf4b',
      title: 'Web Development Essentials Quiz Set',
      description: 'Evaluate your understanding of web development essentials.',
      mark: 15,
      slug: 'web-development-essentials-quiz',
      status: 'active',
      quizIds: [
        '663a0900bfe65e5778eedf47',
        '663a0900bfe65e5778eedf46',
        '663a0900bfe65e5778eedf45'
      ]
    },
    {
      id: '663a096ebfe65e5778eedf4c',
      title: 'Machine Learning Mastery Quiz Set',
      description: 'Test your proficiency in machine learning concepts.',
      mark: 15,
      slug: 'machine-learning-mastery-quiz',
      status: 'active',
      quizIds: [
        '663a0900bfe65e5778eedf43',
        '663a0900bfe65e5778eedf44',
        '663a0900bfe65e5778eedf45'
      ]
    },
    {
      id: '663a096ebfe65e5778eedf4d',
      title: 'Photography Fundamentals Quiz Set',
      description: 'Assess your understanding of photography basics.',
      mark: 15,
      slug: 'photography-fundamentals-quiz',
      status: 'active',
      quizIds: [
        '663a0900bfe65e5778eedf43',
        '663a0900bfe65e5778eedf44',
        '663a0900bfe65e5778eedf45'
      ]
    }
  ]

  for (const set of sets) {
    await prisma.quizSet.create({
      data: {
        id: set.id,
        title: set.title,
        description: set.description,
        mark: set.mark,
        slug: set.slug,
        status: set.status,
        quizzes: {
          connect: set.quizIds.map((quizId) => ({ id: quizId }))
        }
      }
    })
  }

  console.log('✅ Quiz sets seeded')
}

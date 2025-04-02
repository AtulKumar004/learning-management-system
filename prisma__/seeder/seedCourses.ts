import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const seedCourses = async () => {
  const courses = [
    {
      id: '6648184a6fe803e9128d7fba',
      title: 'Learn Python',
      subtitle: 'Learn Python Like a Pro',
      description: 'Learn Python programming language from scratch with hands-on exercises.',
      thumbnail: 'python_thumbnail.png',
      price: 29.99,
      active: true,
      instructorId: '663a06e7bfe65e5778eedf2a',
      categoryId: '664813cc6fe803e9128d7fae',
      quizSetId: '663a096ebfe65e5778eedf4a',
      createdOn: new Date('2024-02-12T00:00:00.000Z'),
      modifiedOn: new Date('2024-04-11T00:00:00.000Z'),
      learning: [
        'Learn Python from the basic fundamentals',
        'Learn how to apply the fundamentals to build things',
        'Learn to make projects that are production ready',
        'Get a bonus chapter on using Python for Machine Learning'
      ]
    },
    {
      id: '664aca881387e2ad2e8be484',
      title: 'Mastering JavaScript',
      subtitle: 'JavaScript Fundamentals Like a PRO',
      description: 'Learn JavaScript fundamentals from scratch with hands-on exercises.',
      thumbnail: 'learn_js_thumbnail.jpeg',
      price: 24.99,
      active: true,
      instructorId: '663a06e7bfe65e5778eedf2a',
      categoryId: '664813cc6fe803e9128d7fae',
      quizSetId: '663a096ebfe65e5778eedf4a',
      createdOn: new Date('2024-02-12T00:00:00.000Z'),
      modifiedOn: new Date('2024-04-11T00:00:00.000Z'),
      learning: [
        'Learn JavaScript from the basic fundamentals',
        'Learn how to apply the fundamentals to build things',
        'Learn to make projects that are production ready',
        'Get a bonus chapter on using JavaScript for Full Stack Develeopment'
      ]
    }
  ]

  for (const course of courses) {
    await prisma.course.create({
      data: course
    })
  }

  console.log('✅ Courses seeded')
}

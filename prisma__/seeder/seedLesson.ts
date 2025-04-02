import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const seedLessons = async () => {
  const lessons = [
    {
      id: '663a0806bfe65e5778eedf35',
      title: 'Introduction to Variables',
      description: 'Learn the basics of variables in programming.',
      duration: 630,
      videoUrl: 'https://example.com/variables_video',
      published: true,
      slug: 'introduction-to-variables',
      access: 'public'
    },
    {
      id: '663a0806bfe65e5778eedf36',
      title: 'HTML Basics',
      description: 'Understand the fundamentals of HTML.',
      duration: 456,
      videoUrl: 'https://example.com/html_basics_video',
      published: true,
      slug: 'html-basics',
      access: 'private'
    },
    {
      id: '663a0806bfe65e5778eedf37',
      title: 'Introduction to Machine Learning',
      description: 'Get introduced to the exciting field of machine learning.',
      duration: 1200,
      videoUrl: 'https://example.com/ml_intro_video',
      published: true,
      slug: 'introduction-to-machine-learning',
      access: 'public'
    },
    {
      id: '663a0806bfe65e5778eedf38',
      title: 'Composition Techniques in Photography',
      description: 'Master various composition techniques for stunning photographs.',
      duration: 200,
      videoUrl: 'https://example.com/photography_composition_video',
      published: true,
      slug: 'composition-techniques-in-photography',
      access: 'public'
    },
    {
      id: '663a0806bfe65e5778eedf39',
      title: 'Budgeting Strategies',
      description: 'Learn effective budgeting strategies for personal finance.',
      duration: 537,
      videoUrl: 'https://example.com/budgeting_strategies_video',
      published: true,
      slug: 'budgeting-strategies',
      access: 'private'
    }
  ]

  await prisma.lesson.createMany({
    data: lessons,
    skipDuplicates: true,
  })

  console.log('✅ Lessons seeded')
}

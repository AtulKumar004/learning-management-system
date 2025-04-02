import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const seedModules = async () => {
  const modules = [
    {
      id: '663a0893bfe65e5778eedf3c',
      title: 'Python Basics',
      description: 'Learn the fundamentals of Python programming language.',
      status: 'active',
      slug: 'python-basics',
      courseId: '6648184a6fe803e9128d7fba',
      duration: 2286,
      lessonIds: [
        '663a0806bfe65e5778eedf35',
        '663a0806bfe65e5778eedf36',
        '663a0806bfe65e5778eedf37'
      ]
    },
    {
      id: '663a0893bfe65e5778eedf3d',
      title: 'HTML5 and CSS3 Essentials',
      description: 'Master HTML5 and CSS3 for modern web development.',
      status: 'active',
      slug: 'html5-css3-essentials',
      courseId: '6648184a6fe803e9128d7fba',
      duration: 2286,
      lessonIds: [
        '663a0806bfe65e5778eedf38',
        '663a0806bfe65e5778eedf39',
        '663a0806bfe65e5778eedf38'
      ]
    }
  ]

  for (const mod of modules) {
    await prisma.module.create({
      data: {
        id: mod.id,
        title: mod.title,
        description: mod.description,
        status: mod.status,
        slug: mod.slug,
        courseId: mod.courseId,
        duration: mod.duration,
        lessons: {
          updateMany: mod.lessonIds.map((lessonId) => ({
            where: { id: lessonId },
            data: { moduleId: mod.id }
          }))
        }
      }
    })
  }

  console.log('✅ Modules and lesson linkage seeded')
}

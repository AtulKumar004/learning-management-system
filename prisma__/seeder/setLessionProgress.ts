import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const seedLessonProgress = async () => {
  await prisma.lessonProgress.createMany({
    data: [
      {
        id: '663a0abdbfe65e5778eedf66',
        userId: '663a0b36bfe65e5778eedf7e',
        lessonId: '663a0806bfe65e5778eedf35',
        createdAt: new Date('2024-05-01T10:00:00Z'),
        modifiedAt: new Date('2024-05-01T10:25:00Z'),
        state: 'completed',
        lastTime: 1500
      },
      {
        id: '663a0abdbfe65e5778eedf67',
        userId: '663a0b36bfe65e5778eedf7e',
        lessonId: '663a0806bfe65e5778eedf36',
        createdAt: new Date('2024-05-02T14:00:00Z'),
        modifiedAt: new Date('2024-05-02T15:30:00Z'),
        state: 'completed',
        lastTime: 1800
      },
      {
        id: '663a0abdbfe65e5778eedf68',
        userId: '663a0b36bfe65e5778eedf7e',
        lessonId: '663a0806bfe65e5778eedf37',
        createdAt: new Date('2024-05-01T11:30:00Z'),
        modifiedAt: new Date('2024-05-01T12:15:00Z'),
        state: 'completed',
        lastTime: 1350
      },
      {
        id: '663a0abdbfe65e5778eedf69',
        userId: 'user_3',
        lessonId: 'lesson_3',
        createdAt: new Date('2024-05-03T09:00:00Z'),
        modifiedAt: new Date('2024-05-03T09:45:00Z'),
        state: 'completed',
        lastTime: 1800
      },
      {
        id: '663a0abdbfe65e5778eedf6a',
        userId: 'user_3',
        lessonId: 'lesson_4',
        createdAt: new Date('2024-05-03T10:00:00Z'),
        modifiedAt: new Date('2024-05-03T11:30:00Z'),
        state: 'watching',
        lastTime: 1200
      }
    ],
    skipDuplicates: true
  })

  console.log('✅ LessonProgress seeded')
}

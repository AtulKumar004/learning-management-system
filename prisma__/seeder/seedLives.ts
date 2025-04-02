import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const seedLives = async () => {
  const lives = [
    {
      id: '663a09b0bfe65e5778eedf51',
      title: 'Introduction to Data Science',
      description: 'Join us for an introduction to the exciting field of data science.',
      thumbnail: 'data_science_thumbnail.jpg',
      videoId: 'video_1',
      slug: 'introduction-to-data-science',
      schedule: new Date('2024-05-15T10:00:00Z'),
      quizId: 'quiz_1',
      instructorId: 'teacher_1',
    },
    {
      id: '663a09b0bfe65e5778eedf52',
      title: 'Web Development Q&A Session',
      description: 'Join our live Q&A session to get your web development questions answered.',
      thumbnail: 'webdev_qa_thumbnail.jpg',
      videoId: 'video_2',
      slug: 'web-development-qa-session',
      schedule: new Date('2024-05-20T15:00:00Z'),
      quizId: 'quiz_2',
      instructorId: 'teacher_2',
    },
    {
      id: '663a09b0bfe65e5778eedf53',
      title: 'Machine Learning Workshop',
      description: 'Participate in our hands-on machine learning workshop.',
      thumbnail: 'ml_workshop_thumbnail.jpg',
      videoId: 'video_3',
      slug: 'machine-learning-workshop',
      schedule: new Date('2024-05-25T09:30:00Z'),
      quizId: 'quiz_3',
      instructorId: 'teacher_3',
    },
    {
      id: '663a09b0bfe65e5778eedf54',
      title: 'Photography Tips and Tricks',
      description: 'Discover useful tips and tricks to improve your photography skills.',
      thumbnail: 'photography_tips_thumbnail.jpg',
      videoId: 'video_4',
      slug: 'photography-tips-and-tricks',
      schedule: new Date('2024-05-30T11:00:00Z'),
      quizId: 'quiz_4',
      instructorId: 'teacher_4',
    },
    {
      id: '663a09b0bfe65e5778eedf55',
      title: 'Financial Planning Seminar',
      description: 'Join our seminar to learn about effective financial planning strategies.',
      thumbnail: 'finance_seminar_thumbnail.jpg',
      videoId: 'video_5',
      slug: 'financial-planning-seminar',
      schedule: new Date('2024-06-05T14:00:00Z'),
      quizId: 'quiz_5',
      instructorId: 'teacher_5',
    }
  ]

  await prisma.live.createMany({
    data: lives,
    skipDuplicates: true,
  })

  console.log('✅ Live sessions seeded')
}

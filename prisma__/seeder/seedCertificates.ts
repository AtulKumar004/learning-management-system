import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const seedCertificates = async () => {
  const certificates = [
    {
      id: '663a0b08bfe65e5778eedf74',
      userId: '663a06e7bfe65e5778eedf2b',
      courseId: '663a07dfbfe65e5778eedf2e',
      enrollmentId: '663a0a2ebfe65e5778eedf5f',
      certificateLink: 'https://example.com/certificates/user_1_course_1_certificate.pdf'
    },
    {
      id: '663a0b08bfe65e5778eedf75',
      userId: '663a0b36bfe65e5778eedf7d',
      courseId: '663a07dfbfe65e5778eedf2f',
      enrollmentId: '663a0a2ebfe65e5778eedf60',
      certificateLink: 'https://example.com/certificates/user_2_course_2_certificate.pdf'
    },
    {
      id: '663a0b08bfe65e5778eedf76',
      userId: '663a0b36bfe65e5778eedf7d',
      courseId: '663a07dfbfe65e5778eedf2f',
      enrollmentId: '663a0a2ebfe65e5778eedf61',
      certificateLink: 'https://example.com/certificates/user_3_course_3_certificate.pdf'
    }
  ]

  await prisma.certificate.createMany({
    data: certificates,
    skipDuplicates: true,
  })

  console.log('✅ Certificates seeded')
}

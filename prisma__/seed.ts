import { PrismaClient } from "@prisma/client";
// import { seedUsers } from './seeder/setUser' // future use
import { seedUsers } from "./seeder/setUser"; // future use
import { seedLessonProgress } from "./seeder/setLessionProgress";
import { seedWatchHistory } from "./seeder/seedWatchHistory";
import { seedTestimonials } from "./seeder/seedTestimonials";
import { seedReports } from "./seeder/seedReports";
import { seedQuizzes } from "./seeder/seedQuizzer";
import { seedQuizSet } from "./seeder/seedQuizSet";
import { seedQuizAssessment } from "./seeder/seedQuizAssessment";
import { seedModules } from "./seeder/seedModules";
import { seedLives } from "./seeder/seedLives";
import { seedLessons } from "./seeder/seedLesson";
import { seedEnrollments } from "./seeder/seedEnrollments";
import { seedCourses } from "./seeder/seedCourses";
import { seedCertificates } from "./seeder/seedCertificates";
import { seedCategories } from "./seeder/seedCategories";
import { seedAssessments } from "./seeder/seedAssessments";
// import { seedProducts } from './seeds/seedProducts' // future use
// import { seedOrders } from './seeds/seedOrders'     // future use

const prisma = new PrismaClient();

async function main() {
  await seedUsers();
  await seedLessonProgress();
  await seedWatchHistory();
  await seedTestimonials();
  await seedReports();
  await seedQuizzes();
  await seedQuizSet();

  await seedQuizAssessment();
  await seedModules();
  await seedLives();
  await seedLessons();
  await seedEnrollments();
  await seedCourses();
  await seedCertificates();
  await seedCategories();
  await seedAssessments();

  // await seedProducts()
  // await seedOrders()
}

main()
  .then(() => {
    console.log("🌱 All seeds executed");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

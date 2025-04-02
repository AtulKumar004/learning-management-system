import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function seedUsers() {
  await prisma.user.createMany({
    data: [
      {
        id: "663a06e7bfe65e5778eedf2a",
        firstName: "John",
        lastName: "Doe",
        password: "password123",
        email: "john.doe@example.com",
        phone: "+1234567890",
        role: "Teacher",
        bio: "Experienced educator passionate about fostering student learning and development.",
        profilePicture: "https://i.pravatar.cc",
        designation: "Senior Software Engineer, Dell Inc.",
        socialTwitter: "@johndoe",
        socialLinkedin: "linkedin.com/in/johndoe",
        socialFacebook: "facebook.com/johndoe",
      },
      {
        id: "663a0b36bfe65e5778eedf7e",
        firstName: "Michael",
        lastName: "Brown",
        password: "securepassword",
        email: "michael.brown@example.com",
        phone: "+4455667788",
        role: "Student",
        bio: "Passionate about finance and investing.",
        profilePicture: "https://i.pravatar.cc",
        designation: "Junior Develeoper, Acme",
        socialLinkedin: "https://linkedin.com/in/michaelbrown",
      },
      {
        id: "664accf41387e2ad2e8be488",
        firstName: "Alex",
        lastName: "Brown",
        password: "securepassword",
        email: "alex.brown@example.com",
        phone: "+42255667788",
        role: "Student",
        bio: "I love programming, I eat JavaScript",
        profilePicture: "https://i.pravatar.cc",
        designation: "Junior Develeoper, OpenText",
        socialLinkedin: "https://linkedin.com/in/alexbrown",
      },
      {
        id: "664adddc1387e2ad2e8be4a0",
        firstName: "Fatima",
        lastName: "Shekh",
        password: "securepassword",
        email: "fatima.shekh@example.com",
        phone: "+88255667788",
        role: "Student",
        bio: "I love coding",
        profilePicture: "https://i.pravatar.cc",
        designation: "Junior Develeoper, Microsoft",
        socialLinkedin: "https://linkedin.com/in/fatima",
      },
    ],
    skipDuplicates: true,
  });
}



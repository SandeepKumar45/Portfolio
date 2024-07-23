import project1 from "../assets/projects/HotelBooking.jpg";
import project2 from "../assets/projects/jobseeking.png";
import project3 from "../assets/projects/blog.jpg";
import project4 from "../assets/projects/ecommerce.png";
import project5 from "../assets/projects/project-2.jpg";

export const HERO_CONTENT = `I am Sandeep, a dedicated software engineer with a strong foundation in full stack development. As a recent B.Tech graduate in Computer Science and Engineering, I specialize in crafting responsive and intuitive web applications. My expertise spans front-end technologies like HTML, CSS, JavaScript, React.js, and Redux Toolkit, as well as back-end technologies including Node.js, MongoDB, and Express.js. With a passion for learning and innovation, I aim to develop scalable and efficient solutions that enhance user experiences and drive technological progress.`;

export const ABOUT_TEXT = `I am a dedicated full stack developer passionate about creating efficient and user-friendly web applications. Recently graduated with a B.Tech in Computer Science, I have expertise in HTML, CSS, JavaScript, React.js, Redux Toolkit, Node.js, Express.js, and MongoDB. My journey in web development began with a curiosity for how things work and has evolved into a career focused on solving complex problems and delivering high-quality solutions. I thrive in collaborative environments and enjoy exploring new technologies and staying active outside of coding.`;

export const PROJECTS = [
  {
    title: "Hotel Booking Application",
    image: project1,
    description:
      "Developed a MERN stack hotel booking app with user registration/login, hotel browsing, adding/updating listings, viewing bookings, filtering, searching by type/location, and Stripe payment integration.",
    technologies: ["HTML", "CSS", "React", "React Query", "Node.js", "MongoDB", "Express.js"],
    codeLink: "https://github.com/SandeepKumar45/MERN_HOTEL_BOOKING_APP",
    appLink: "https://mern-hotel-booking-app-0t3h.onrender.com/"
  },
  {
    title: "Job Seeking App",
    image: project2,
    description:
      "A MERN job seeking app enabling users to register as employers or job seekers, with features like job posting, application review, and listing management.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", "Express.js"],
    codeLink: "https://github.com/SandeepKumar45/MERN_JOB_SEEKING",
    appLink: "https://mern-job-seeking-rouge.vercel.app"
  },
  {
    title: "Blogging Platform",
    image: project3,
    description:
      "An all-in-one blog platform featuring rich text editing, user profiles, and seamless publishing capabilities.",
    technologies: ["HTML", "Tailwind CSS", "React", "Appwrite"],
    codeLink: "https://github.com/SandeepKumar45/MegaBlog",
    appLink: "https://ablogs.vercel.app"
  },
  {
    title: "Ecommerce App",
    image: project4,
    description:
      "An Ecommerce platform with React and Firebase, featuring secure authentication, admin product management, dynamic shopping cart, and integrated payments.",
    technologies: ["HTML", "Tailwind CSS", "React", "Firebase"],
    codeLink: "https://github.com/SandeepKumar45/Ecommerce",
    appLink: "https://easybazzaar.vercel.app"
  },
  {
    title: "Real-Time Chat Application",
    image: project5,
    description:
      "Developed a real-time chat app with React and Firebase, enabling seamless user authentication, one-on-one messaging, image sharing and user search.",
    technologies: ["HTML", "Tailwind CSS", "React", "Firebase"],
    codeLink: "https://github.com/SandeepKumar45/Chat-App",
    appLink: "https://ignitechat.vercel.app/"
  },
];

export const CONTACT = {
  address: "Berhampur, Odisha, India",
  phoneNo: "+91 6370534948",
  email: "sandeepkumar637053@gmail.com",
};

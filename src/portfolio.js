/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Jamshidmirzo's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Abdufattoxov Jamshidmirzo Portfolio",
    type: "website",
    url: "https://t.me/opercoder",
  },
};

//Home Page
const greeting = {
  title: "Abdufattoxov Jamshidmirzo",
  logo_name: "Abdufattoxov",
  nickname: "opercoder",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1dO-6YZlcNUqOcW2PisUEr-VvxNstH0uC/view?usp=sharing",
  portfolio_repository: "hhttps://github.com/Jamshidmirzo",
  githubProfile: "https://github.com/Jamshidmirzo",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Jamshidmirzo",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jamshidmirzo/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:flutterforeveruz@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Telegram",
    link: "https://t.me/opercoder",
    fontAwesomeIcon: "fa-telegram", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/jamwid.a7/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "FLUTTER DEVELOPER",
      fileName: "DataScienceImg",
      skills: [
        "⚡️ Experience working with Flutter, Android, and iOS projects",
        "⚡ Expertise in creating dynamic and user-friendly mobile applications with complex functionalities",
      ],
      softwareSkills: [
        {
          skillName: "Dart",
          fontAwesomeClassname: "logos-dart",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "logos-flutter",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "logos-firebase",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/opercoder/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/abdufattaxovjam1",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Tashkent University of Informational Technologies",
      subtitle: "Computer Engineering faculty",
      logo_path: "tatu_logo1.png",
      alt_name: "TUIT",
      duration: "2022 - 2026",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
        "⚡️ I am studying in the Computer Engineering faculty at Tashkent University of Information Technologies.",
      ],
      website_link: "https://tuit.uz",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Python",
      subtitle: "opercoder",
      logo_path: "rank.png",
      certificate_link: "https://www.hackerrank.com/certificates/ddbfe3a27681",
      alt_name: "Hackerrank",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as a Flutter Developer, Designer, and Software Architect. I have also worked with some well-established companies primarily as a Flutter Developer. I love organizing events and am involved with many open-source communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Technical Designer",
          company: "Printuz",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "print_uz.jpg",
          duration: "January 2023 - May 2023",
          location: "Tashkent, UZB",
          description:
            "I developed detailed technical specifications, reviewed and validated design prototypes, conducted quality assurance, and created comprehensive documentation. I collaborated with project managers, designers, and developers to address technical challenges and ensure successful project delivery, applying my technical skills to maintain precision and alignment with requirements.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Flutter Developer Intern",
          company: "RAspectiful",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "helth.jpg",
          duration: "June 2024 - August 2024",
          location: "Tashkent, UZB",
          description:
            "I collaborated with senior developers to design and implement new features for mobile applications. My responsibilities included bug fixing, performance optimization, code reviews, and documentation. I worked closely with cross-functional teams to ensure project alignment and timely delivery, gaining hands-on experience and enhancing my skills in mobile app development.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Flutter Developer Volunteer",
          company: "Tech For Good",
          company_url: "https://www.techforgood.net",
          logo_path: "tech_for_good.png",
          duration: "March 2023 - December 2023",
          location: "Tashkent, UZB",
          description:
            "I designed and implemented mobile app features using Flutter for social impact projects. I collaborated with project managers and developers to ensure timely delivery, and engaged with the community through events and workshops, promoting Flutter’s use for social good and sharing insights with aspiring developers.",
          color: "#4285F4",
        },
        {
          title: "Flutter Developer Volunteer",
          company: "Open Source for Education",
          company_url: "https://www.microsoft.com/",
          logo_path: "open.png",
          duration: "May2024 - June 2024",
          location: "Tashkent, UZB",
          description:
            "I enhanced educational technology solutions by developing new features and improving existing functionalities in educational apps using Flutter. I conducted code reviews, provided mentorship on best practices, and created documentation and training materials to support new contributors and align them with the project's goals.",
          color: "#D83B01",
        },
        {
          title: "Flutter Developer Volunteer",
          company: "Community Health Initiative",
          company_url: "https://calchi.org",
          logo_path: "helth.jpg",
          duration: "July 2024-July 2024",
          location: "Tashkent, UZB",
          description:
            " I developed and maintained mobile applications aimed at enhancing access to health resources for underserved communities. I focused on improving user interfaces and experiences to ensure the apps were intuitive and user-friendly, and collaborated with health professionals and stakeholders to integrate feedback and align the apps with project objectives.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a wide range of the latest technology tools. My best experience involves creating Flutter projects and deploying them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    /* {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    } */
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile-pic.png",
    description:
      "I am available on almost every social media. You can message me, and I will reply within 24 hours. I can help you with mobile development, including Flutter, Android, iOS, and other platforms.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://t.me/oper_blog",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Tashkent, Mirzo Ulug`bek, Ahmad Yugnakiy 6-72",
    locality: "Mirzo Ulug`bek",
    country: "UZB",
    region: "TASHKENT",
    postalCode: "100000",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/@41.349952,69.3837092,16z?entry=ttu",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+998955554727 UZ",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};

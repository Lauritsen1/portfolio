import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "Rasmus Lauritsen",
  initials: "RL",
  location: "Zealand, Denmark, CET",
  locationLink: "https://www.google.com/maps/place/Zealand",
  about:
    "Full Stack Web Developer specializing in React and TypeScript, dedicated to building robust and efficient web applications.",
  summary:
    "I'm Rasmus, a full-stack web developer specializing in React, TypeScript, and the broader JavaScript ecosystem. I embrace a minimalist approach and find satisfaction in my work, consistently seeking to learn something new with each project. I enjoy keeping up with the latest tech trends. Feel free to explore my work below.",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/43439056?s=400&u=ac677f27932e4e47d6ec63313475428100d9b0cc&v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "rasmus.lauritsen@outlook.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Lauritsen1",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rlauritsen",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "Itucation",
      degree: "ASP.NET MVC Web Development/Programming using C#",
      start: "2021",
      end: "",
    },
    {
      school: "Roskilde Technical College",
      degree:
        "EUD(VET) in web development, with a focus on the fundamentals HTML, CSS, and JavaScript and Node.js",
      start: "2018",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Apposix",
      link: "https://www.apposix.com/en/",
      badges: [],
      title: "Software Developer",
      logo: null,
      start: "2022",
      end: "2023",
      description:
        "As a developer at Apposix, my primary work was development of the user interface, ensuring the UI was intuitive and aligned with company standards. This involved creating a chat component, implementing notifications, and designing settings pages for different applications. Additionally, I wrote documentation for the internal platform.",
    },
    {
      company: "PC Fejl",
      link: "",
      badges: [],
      title: "Web Developer",
      logo: null,
      start: "2020",
      end: "2021",
      description:
        "A company founded by me and three friends, with a primary focus on providing IT support to private clients, my key responsibilities included: Developing a custom CMS, creating and maintaining the company website and handling various administrative tasks, including communication with the bank, tax-related matters, etc.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "HTML/CSS",
    "TailwindCSS",
    "SQL",
    "Express.js",
    "REST APIs",
  ],
  projects: [
    {
      title: "Blog",
      techStack: ["React/Next.js", "TypeScript", "TailwindCSS"],
      description:
        "A blog platform featuring user authentication and full CRUD operations for posts.",
      logo: null,
      link: {
        label: "",
        href: "https://nextjs-blog-psi-bice-76.vercel.app/",
      },
    },
    {
      title: "Country Finder",
      techStack: ["React", "TypeScript", "TailwindCSS"],
      description:
        "Web app with a debounced search feature for quick and efficient country information lookup.",
      logo: null,
      link: {
        label: "",
        href: "https://country-finder-pi-nine.vercel.app/",
      },
    },
    {
      title: "Calculator",
      techStack: ["React"],
      description: "A simple iphone inspired calculator",
      logo: null,
      link: {
        label: "",
        href: "https://inspiring-ritchie-be6a44.netlify.app/",
      },
    },
  ],
} as const;

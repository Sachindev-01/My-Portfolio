import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaNodeJs,
  FaGitAlt,
  FaMarkdown,
} from "react-icons/fa";

import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiFirebase,
  SiBootstrap,
  SiCanva,
  SiTypescript,
  SiTailwindcss,
  SiReactquery,
  SiRedux,
  SiHashnode
} from "react-icons/si";

export const navigationUrls = [
  {
    urlName: "Home",
    url: "/",
  },
  {
    urlName: "Projects",
    url: "/projects",
  },
  {
    urlName: "Blogs",
    url: "/blogs",
  },
  {
    urlName: "contact",
    url: "/contact",
  },
];

export const socials = [
  {
    name: "github",
    url: "https://github.com/ImAnshuJoshi/",
    icon: <FaGithub />,
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/sachin-kumar007/",
    icon: <FaLinkedinIn />,
  },
  {
    name: "twitter",
    url: "https://twitter.com/sachinktwts",
    icon: <FaTwitter />,
  },
  {
    name: "hashnode",
    url: "https://hashnode.com/@sachink07",
    icon: <SiHashnode />,
  },
];

export const languages = [
  {
    name: "html5",
    icon: <SiHtml5 />,
    color: "#e34c26",
    desc: "HTML (Hypertext Markup Language) is the code that is used to structure a web page and its content.",
  },
  {
    name: "css3",
    icon: <SiCss3 />,
    color: "#264de4",
    desc: "CSS (Cascading Style Sheets) is used to style and layout web pages",
  },
  {
    name: "tailwind",
    icon: <SiTailwindcss />,
    color: "#3f9eee",
    desc: "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
  },
  {
    name: "javascript",
    icon: <SiJavascript />,
    color: "#f0db4f",
    desc: "JavaScript is commonly used for creating web pages. JavaScript helps us to execute complex actions and also enables the interaction of websites with visitors.",
  },
  {
    name: "typescript",
    icon: <SiTypescript />,
    color: "#00BFFF",
    desc: "JavaScript is commonly used for creating web pages. JavaScript helps us to execute complex actions and also enables the interaction of websites with visitors.",
  },
  {
    name: "react",
    icon: <SiReact />,
    color: "#713ABE",
    desc: "It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript",
  },
  {
    name: "redux",
    icon: <SiRedux />,
    color: "#713ABE",
    desc: "Redux Toolkit is used for writing redux code but in a more concise way. Redux Toolkit (RTK) solves problems that most of the developer's face who used redux in a react application. RTK abstracts the basic redux code and provides us boilerplates that enable us to write redux code in less lines of code.",
  },
  {
    name: "react query",
    icon: <SiReactquery />,
    color: "#FF0060",
    desc: "React Query is a data-fetching and state management library for React applications that simplifies fetching, caching, and updating data. source: Theodo. React Query provides: An intuitive API for fetching data from RESTful or GraphQL APIs. Caching the results.",
  },
  {
    name: "nodejs",
    icon: <FaNodeJs />,
    color: "#68a063",
    desc: "Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It is used for traditional web sites and back-end API services",
  },
  {
    name: "expressjs",
    icon: (
      <p className="flex-center pd-0 mg-0 tf-y-5" >
        ex
      </p>
    ),
    color: "#ffffff",
    desc: "ExpressJS is a javascript library. The primary use of Express is to provide server-side logic for web and mobile applications, and as such it is used all over the place.",
  },
  {
    name: "mongodb",
    icon: <SiMongodb />,
    color: "#589636",
    desc: "MongoDB is a document database used to build highly available and scalable internet applications.",
  },
  {
    name: "git",
    icon: <FaGitAlt />,
    color: "#f34f29",
    desc: "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
  },
  {
    name: "github",
    icon: <FaGithub />,
    color: "#ffffff",
    desc: "Github is a web-based platform used for version control. Git simplifies the process of working with other people and makes it easy to collaborate on projects.",
  },
  {
    name: "firebase",
    icon: <SiFirebase />,
    color: "#ffcb2b",
    desc: "Google Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps.",
  },
  {
    name: "markdown",
    icon: <FaMarkdown />,
    color: "#ffffff",
    desc: "A lightweight markup language for creating formatted text using a plain-text editor.",
  },
  {
    name: "bootstrap",
    icon: <SiBootstrap />,
    color: "#563d7c",
    desc: "Bootstrap is an HTML, CSS & JS Library that focuses on simplifying the development of informative web pages",
  },
  {
    name: "Canva",
    icon: <SiCanva />,
    color: "#61DBFB",
    desc: "Canva is a graphic design platform, used to create social media graphics, presentations, posters, documents and other visual content.",
  },
];

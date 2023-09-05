import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  cifer,
  novaBenefits,
  magna,
  imagiq,
  lyriks,
  threejs,
  vuejs,
  bootstrap,
  postgres,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "full stack Developer",
    icon: backend,
  },
  {
    title: "Web Designing",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "postgres",
    icon: postgres,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Nova Benefits",
    icon: novaBenefits,
    iconBg: "#FDC948",
    date: "Jan 2023 - June 2023",
    points: [
      "Worked on enterprise level codebase using Vue as frontend and NodeJS and Apollo GraphQL as backend.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Delivered multiple sprint goals and written many tech specs in the organization.",
      "Contributed in optimizing run time of many queries making the application faster.",
      "Completed training on secure coding practices and OWASP top 10 vulnerabilities.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Cifer- an early age tech startup",
    icon: cifer,
    iconBg: "#383E56",
    date: "April 2021 - September 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Web flow and website design using React as front end.",
      "Created an chrome extension using JavaScript and integrated it with Binance network.",
      "Implemented interactive animations for smoother UI.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I collaborated with Rishabh on many projects, and it has been a true delight. I highly recommend him.",
    name: "Debopriya Dey",
    designation: "Web developer",
    company: "Third eye Analytics",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "Rishabh is an absolute gem. Not only is he a skilled web developer, but also his sincerity is unmatched.",
    name: "Nimesh Solanki",
    designation: "SDE 2",
    company: "Nova Benefits",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Rishabh is a great asset to any team he goes. He is a team player, skilled generalist and a great communicator.",
    name: "Md.Amaan Ansari",
    designation: "CEO",
    company: "Atomos Technologies",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

const projects = [
  {
    name: "Magna",
    description:
      "Magma is a frontend project Web3 platform for all real estate stakeholders, which provides users with the ability to manage interactions between physical and digital assets through unique, and collectively generated, 3D representations of their buildings.",
    tags: [
      {
        name: "HTML/CSS",
        color: "pink-text-gradient",
      },
      {
        name: "GSAP",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
    ],
    image: magna,
    source_code_link: "https://github.com/CodeRishabh/Magna",
    live_link: "https://magna-seven.vercel.app/",
  },
  {
    name: "ImagIQ AI",
    description:
      "A powerful AI based tool that is not only able to generate responses to any queries but also generate images, music and videos. It is a full fledged SaaS with features like user authentication and chatbot. It is based on the GPT3.5 model and is built on latest tech and best industry practices.",
    tags: [
      {
        name: "NEXT JS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "ShadCDN UI",
        color: "pink-text-gradient",
      },
    ],
    image: imagiq,
    source_code_link: "https://github.com/CodeRishabh/ImagiQ-AI-web-app",
    live_link: "https://imagiq-ai.vercel.app/",
  },
  {
    name: "Lyriks music app",
    description:
      "An user friendly music player application based on React and powered by the Shazam API for providing latest tracks, info and lyrics. It uses Tailwind CSS for modern styling and Redux for efficient state management. It has an interactive music player with various powerful functionalities.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
    ],
    image: lyriks,
    source_code_link: "https://github.com/CodeRishabh/Lyriks-music-app",
    live_link: "https://lyriks-music-app-sable.vercel.app/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };

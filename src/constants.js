// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import ml from './assets/tech_logo/ml.jpg';
import powerbi from './assets/tech_logo/power-bi.png';
import anaconda from './assets/tech_logo/anaconda.png';
import excel from './assets/tech_logo/excel.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import prisma from './assets/tech_logo/prisma.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import jupyter from './assets/tech_logo/jupyter.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import dtu from './assets/education_logo/dtu.jpg';
import navyug from './assets/education_logo/navyug1.jpg';
import bishop from './assets/education_logo/bishop1.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import aicoach from './assets/work_logo/aicoach.png';
import clariwell from './assets/work_logo/clariwell.png';
import food from './assets/work_logo/food.png';
import ola1 from './assets/work_logo/phone.jpg';

import tasty from './assets/work_logo/tasty1.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      
    ],
  },
  {
    title: 'Backend',
    skills: [
     
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Prisma', logo: prisma },
         
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
     
      { name: 'C++', logo: cppLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Python', logo: pythonLogo },
     
      { name: 'JavaScript', logo: javascriptLogo },
     
    ],
  },
  {
    title: 'Data Analysis Tools',
    skills: [
     
      { name: 'Excel', logo: excel },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'Machine Learning', logo: ml },
      { name: 'Anaconda', logo: anaconda },
      { name: 'Power-Bi', logo: powerbi },
      { name: 'Jupyter Notebook', logo: jupyter },
     
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Jupyter Notebook', logo: jupyter },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  
  export const education = [
    {
      id: 0,
      img: dtu,
      school: "Delhi Technological University",
      date: "Sept 2022 - July 2026",
      grade: "7.1 CGPA",
      desc: "I am currently pursuing a Bachelor of Technology (B.Tech) in Electronics and Communication Engineering, where I have developed a strong interest in software development and emerging technologies. Alongside my coursework, I’ve been building skills in web development, AI integration, and full-stack projects. I actively work on tech-based applications using tools like React, Node.js, and Python, and I’m continuously exploring areas such as machine learning, API development, and cloud deployment to strengthen my development experience.",
      degree: "BTECH-Electronics and Communication",
    },
   
    {
      id: 1,
      img: navyug,
      school: "Navyug Convent Senior Secondary School",
      date: "Apr 2020 - March 2021",
      grade: "83%",
      desc: "I completed my Class 12 education from Navyug Convent School, Delhi, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM). Alongside, I prepared for JEE at FIITJEE South Delhi (Hauz Khas).",
      degree: "CBSE(XII) - PCM ",
    },
    {
      id: 2,
      img: bishop,
      school: "Bishop Scott Girls' School",
      date: "Apr 2018 - March 2019",
      grade: "95%",
      desc: "I completed my Class 10 education from Bishop Scott Girls' School, Patna, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "SkillRise-AI Coach",
      description:
        "Advance your career with AI Coach, your all-in-one virtual mentor. Get personalized guidance, tailored interview preparation, and smart AI-powered tools designed to help you land your dream job. Whether you're a student or a professional, AI Coach supports your journey with insights, feedback, and resources that keep you one step ahead.",
      image: aicoach,
      tags: ["HTML", "Next.js", "Prisma", "Neon","Tailwind CSS","Shadcn UI", "Inngest","Gemini API"],
      github: "https://github.com/Manya126/aicoach.git",
      webapp: "https://aicoach-omega.vercel.app",
    },
    {
      id: 1,
      title: "CLARIWELL-Your path to inner calm",
      description:
        "Clariwell is a beautifully crafted mental wellness app designed to help users reduce stress, understand emotional pain, and improve focus through guided meditation and mindful practices. With our calming interface and beginner-friendly approach, Clariwell encourages deeper self-connection and compassion. Explore the essentials of mindfulness and let us guide you to a healthier, more balanced mind.",
      image: clariwell,
      tags: ["React JS", "Tailwindcss", "JavaScript","HTML"],
      github: "https://github.com/Manya126/CLARIWELL.git",
      webapp: "https://clariwell-manya126s-projects.vercel.app",
    },
    {
      id: 2,
      title: "DelishDash-Food Delivery App",
      description:
        "DelishDash is a modern, responsive food delivery application built using React. It offers a smooth user experience with dynamic filtering by categories like breakfast, soups, pasta, and more. Users can explore dishes, check dietary info (veg/non-veg), and add items to their cart with just a click. Designed for simplicity and speed, DelishDash showcases the power of React in building real-world, interactive web apps.",
      image: food,
      tags: ["React JS", "HTML", "TailwindCSS", "JavaScript"],
      github: "https://github.com/Manya126/FOOD-DELIVERY-APP.git",
      webapp: "https://food-delivery-app-nine-flame.vercel.app",
    },
    {
      id: 3,
      title: "OlaCab- Data Analysis",
      description:
        "Created a synthetic ride-hailing dataset; used SQL, Excel, and Power BI to analyze trends, visualize KPIs, and identify key issues like cancellations and delays for business insights.",
      image: ola1,
      tags: ["SQL", "Excel", "PowerBi"],
      github: "https://github.com/Manya126/OlaDataAnalysis.git",
      webapp: "https://github.com/Manya126/OlaDataAnalysis.git",
    },
    {
      id: 4,
      title: "TastyTrove",
      description:
        "TastyTrove is a stylish, React-powered recipe application that brings a world of flavors to your screen. Whether you're craving Indian spice, American comfort, British classics, or Asian delights, TastyTrove lets users explore dishes by cuisine. Each recipe features detailed instructions, ingredient breakdowns, and appetizing visuals. With a user-friendly interface and interactive tabs, this app makes cooking fun, accessible, and visually engaging.",
      image: tasty,
      tags: ["React JS", "API", "NPM", "CSS"],
      github: "https://github.com/Manya126/TastyTrove.git",
      webapp: "https://tasty-trove-kfu1.vercel.app",
    },
    
  ];  
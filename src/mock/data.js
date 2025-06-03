import { nanoid } from 'nanoid';
import rit from '../images/rit.jpg';
import trinityChurch from '../images/trinity-church.jpg';
import espn from '../images/espn.jpg';
import stuyvesant from '../images/stuyvesant.jpg';
import docusign from '../images/docusign.jpg';
import prana from '../images/prana.jpg';

// HEAD DATA
export const headData = {
  title: 'Calvin Wu', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: `Hi, I'm`,
  name: 'Calvin Wu',
  subtitle: `I'm a developer`,
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: `I was born and raised in Brooklyn but moved to San Francisco after college to start my career in tech.`,
  paragraphTwo: `My passions include snowboarding, live music, reading, and traveling. I have a strong interest in healthy living, and I would say that my workout is my favorite part of the day. I enjoy all types of exercise, from running and lifting weights to practicing yoga. Additionally, I am obsessed with contrast therapy.`,
  resume: 'https://1drv.ms/b/c/ab50118a714aae82/EWZwtgCItwZKhm4pxpJZRKEBzzmO7r15QqkZnzd-kDjuvw?e=08aN9X', // if no resume, the button will not show up
};

// EXPERIENCE DATA
export const experiencesData = [
  {
    id: nanoid(),
    img: prana,
    organization: 'Prana',
    title: 'Founding Full Stack Engineer',
    location: 'San Francisco, CA',
    url: 'https://www.prana.health/',
    date: "Jan '24 - ",
    color: 'grey',
    description: `I joined Prana because I was excited about my friend's vision. Prana is an app to help people track and optimize their health. I along with another engineer built the MVP for the app, spending long days working out of the Salesforce Tower WeWork.`,
  },
  {
    id: nanoid(),
    img: docusign,
    organization: 'DocuSign',
    title: 'Front End Software Engineer/QA Engineer',
    location: 'San Francisco, CA',
    url: 'https://www.docusign.com/',
    date: "Apr '21 - Aug '23",
    color: '#228B22',
    description: `DocuSign was my first job after college, and it allowed me to fulfill my dream of moving to California. I started as a software development engineer in test, where I assisted in migrating the existing Selenium-based test automation to Playwright. Later, I transitioned into a front-end software engineer role, where I led the development of the Document Field Assist feature. This feature utilized AI to predict fields for uploaded documents and was rolled out to thousands of enterprise customers, saving them up to 95% of their time in the envelope sending process.`,
  },
  {
    id: nanoid(),
    img: rit,
    organization: 'Rochester Institute of Technology',
    title: 'BS in Software Engineering, Minor in Business Administration',
    location: 'Rochester, NY',
    url: 'https://www.rit.edu/',
    date: 'Class of 2020',
    color: '#F76902',
    description: `I entered RIT as a business major, but soon decided to switch to software engineering. Despite the brutal winters and stressful workloads, I really found a home in the nerdy culture here. For our 4-person senior project, we created a data warehousing ETL service to enable more BI reports from OnGuard, an enterprise grade access control and alarm monitoring system.
.`,
  },
  {
    id: nanoid(),
    img: espn,
    organization: 'ESPN (Walt Disney Direct-to-Consumer & International)',
    title: 'Front End Software Engineer Intern',
    location: 'Bristol, Connecticut',
    url: 'https://www.espn.com/',
    date: "Sep '19 - Dec '19",
    color: '#CD242E',
    description: `At ESPN I worked on fixing customer-reported bugs and redesigning watchespn.com. I also wrote helpful scripts that users could activate to easily change from the dev to prod website and vice-versa. During my time here, I shared a hotel with fellow interns and became life-long friends with them.`,
  },
  {
    id: nanoid(),
    img: trinityChurch,
    organization: 'Trinity Church Wall Street',
    title: 'IT Intern',
    location: 'New York, NY',
    url: 'https://www.trinitywallstreet.org/',
    date: "Jun '18 - Sep '19",
    color: 'black',
    description: `If you're curious about why a church has an IT department, it's because Trinity was granted land by the queen in 1705 and has since become a non-profit organization funded by its real estate ventures. As a solo developer here, I had the opportunity to make design decisions, work across the stack, and learn front-end development. The main project I focused on was creating a web calendar that displays a year view, intended to replace the whiteboard yearly planner that the rector was using.`,
  },
  {
    id: nanoid(),
    img: stuyvesant,
    organization: 'Stuyvesant High School',
    title: 'Regents Diploma with Advanced Designation with Honors',
    location: 'New York, NY',
    url: 'https://stuy.enschool.org/',
    date: 'Class of 2015',
    color: '#21366d',
    description: `If it hadn't been for Stuyvesant, which inspired my love of learning, I wouldn't be the person I am today—someone who enjoys museums, classics, journalism, and politics. This school also instilled a strong go-getter culture in me.`,
  },
];

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'inDoors.png',
    title: 'inDoors',
    info: `An extension that displays companies' Glassdoor ratings on LinkedIn and other job sites.`,
    info2: `This was the first extension that I made and it was out of frustration from constantly searching companies on Glassdoor while applying to jobs. I received lots of love from r/cscareerquestions for making this extension which motivated me to continue doing open-source work.`,
    url: 'https://github.com/CalvinWu4/inDoors',
    achievement: '2000+ Users',
  },
  {
    id: nanoid(),
    img: 'rate-my-professor-rit.png',
    title: 'RIT Rate My Professors Extension',
    info: 'An extension for RIT students that shows the Rate My Professors rating of professors while searching for classes.',
    info2:
      'I noticed that there are dozens of Rate My Professor extensions out there created for different colleges by their students. Despite having already graduated, I decided to create the best version of this extension yet as a thank you to my alma mater.',
    url: 'https://github.com/CalvinWu4/RIT-Rate-My-Professors-Extension',
    achievement: '100+ Users',
  },
  {
    id: nanoid(),
    img: 'any-college.png',
    title: 'Any School Rate My Professors Extension',
    info: `A school-agnostic version of the RIT Rate My Professors Extension that I made. To add support for their college's website, students fill out a public Airtable with the site's URL, CSS selectors for the elements containing the professor names, and name of the college as can be found on ratemyprofessors.com. They can then go to the site and click on the extension which prompts for permission to add the ratings.`,
    info2: `I wanted to bring to this extension to my friends who are attending other schools and save college students everywhere from having to create a Rate My Professors extension ever again.`,
    url: 'https://github.com/CalvinWu4/Any-School-Rate-My-Professors-Extension',
    achievement: '500+ Users',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Feel free to email me about job opportunities or ideas',
  btn: 'Email',
  email: 'calvinwu4@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin-in',
      url: 'https://www.linkedin.com/in/calvin-wu/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/CalvinWu4',
    },
    {
      id: nanoid(),
      name: 'goodreads-g',
      url: 'https://www.goodreads.com/calvinwu',
    },
    {
      id: nanoid(),
      name: 'strava',
      url: 'https://www.strava.com/athletes/calvinwu',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

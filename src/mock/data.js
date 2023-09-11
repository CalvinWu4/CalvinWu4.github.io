import { nanoid } from 'nanoid';
import rit from '../images/rit.jpg';
import trinityChurch from '../images/trinity-church.jpg';
import espn from '../images/espn.jpg';
import stuyvesant from '../images/stuyvesant.jpg';

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
  img: 'profile.jpg',
  paragraphOne: `I was born and raised in Brooklyn but moved to San Francisco after college for a tech job.`,
  paragraphTwo: `When I'm not at work, you can often find me running, biking, roller blading, or playing tennis at Golden Gate Park, hosting a dinner or board game night, at a hacker house party, at a Ocean Beach bonfire, or snowboarding in Tahoe.`,
  resume: 'https://1drv.ms/b/s!AoKuSnGKEVCrheN2GiWGquLObcON4w?e=IRPBsQ', // if no resume, the button will not show up
};

// EXPERIENCE DATA
export const experiencesData = [
  {
    id: nanoid(),
    img: rit,
    organization: 'Rochester Institute of Technology',
    title: 'BS in Software Engineering, Minor in Business Administration',
    location: 'Rochester, NY',
    url: 'https://www.rit.edu/',
    date: 'Class of 2020',
    color: '#F76902',
    description: `I entered here as a business major because I wasn't confident in my coding skills from high school, but soon decided to embrace the challenge of software engineering. Despite the brutal winters and stressful workloads, I really enjoyed the nerdy culture and suburban peacefulness at RIT.`,
  },
  {
    id: nanoid(),
    img: espn,
    organization: 'ESPN (Disney DTCI)',
    title: 'Front End Software Engineer Intern',
    location: 'Bristol, Connecticut',
    url: 'https://www.espn.com/',
    date: 'Sept 2019 - Dec 2019',
    color: '#CD242E',
    description: `What a time! We interns shared a hotel and I had just gotten my driver's license. I also loved being able to work on a fun product that I cared about since I'm a big sports (and especially soccer) fan.`,
  },
  {
    id: nanoid(),
    img: trinityChurch,
    organization: 'Trinity Church Wall Street',
    title: 'IT Intern',
    location: 'New York, NY',
    url: 'https://www.trinitywallstreet.org/',
    date: 'Jun 2018 - Sep 2019',
    color: 'black',
    description: `If you're wondering why a church has an IT department, it's because Trinity was given land by the queen in 1705 and is now a non-profit enterprise funded by its real estate projects. It was lonely being a solo developer here but I appreciated being able to make design decisions, work across all parts of the stack, and learn front-end development. Lastly, I'm proud to have been on an intern team that came up with program ideas for Trinity Church's new community center.`,
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
    description: `If it hadn't been for Stuyvesant inspiring a love of learning in me, I wouldn't be the person I am today who enjoys museums, classics, journalism, and politics. This school also deeply instilled in me with its go-getter culture.`,
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
    achievement: '1200+ Users',
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

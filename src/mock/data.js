import { nanoid } from 'nanoid';
import rit from '../images/rit.jpg';
import trinityChurch from '../images/trinity-church.jpg';
import espn from '../images/espn.jpg';
import stuyvesant from '../images/stuyvesant.jpg';
import inDoors from '../images/inDoors.jpg';
import rateMyProfessorRit from '../images/rate-my-professor-rit.png';

// HEAD DATA
export const headData = {
  title: 'Calvin Wu', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Calvin',
  subtitle: '',
  cta: '',
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/calvin-wu/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/calvinwu4',
    },
  ],
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Recent RIT grad and life-long New Yorker',
  paragraphTwo:
    'I love books (esp. classics), running, video games (esp. Overwatch), and angsty songs.',
  paragraphThree: `Fun fact: I'm a huge journalism and politics junkie. I live for ideas and debate. I even follow international politics.`,
  resume: '', // if no resume, the button will not show up
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
    description: `I entered here as a business major because even though I liked coding, I wasn't confident in my skills in it from high school. However, I quickly decided that I didn't want to take the easy road in life and switched to software engineering. Despite the brutal winters and stressful workloads, I really enjoyed the nerd culture and suburban peacefulness I experienced while attending RIT.`,
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
    description: `What a time! We interns shared a hotel and I had just gotten my driver's license. I also loved being able to work on a product that was fun and that I actually cared about since I'm a big sports and especially soccer fan.`,
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
    description: `If you're wondering why a church has a IT department, it's because Trinity was given land by the queen in 1697 and is now a non-profit enterprise funded by its real estate projects. It was lonely being a solo developer but I appreciated being able to work across all parts of the stack and to make design decisions. It was here that I first learned front-end development. I'm also proud to have been on an intern team that created ideas for Trinity Church's new community center.`,
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
    description: `If it hadn't been for Stuyvesant inspiring a love of learning in me, I wouldn't be the person I am today enjoying the classics, museums, and The Economist/New Yorker. I also left this school deeply influenced by its go-getter culture.`,
  },
];

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: inDoors,
    title: 'inDoors',
    info: `An extension that displays companies' Glassdoor ratings on LinkedIn and other job sites.`,
    info2: `This was the first extension that I made and it was out of frustration from constantly searching companies on Glassdoor while applying to jobs. I received lots of love from r/cscareerquestions for making this extension which motivated me to continue doing open-source work.`,
    url: 'https://github.com/CalvinWu4/inDoors',
    repo: 'https://github.com/CalvinWu4/inDoors', // if no repo, the button will not show up
    achievement: '350+ Users, 500+ Installs, 1500+ Views',
  },
  {
    id: nanoid(),
    img: rateMyProfessorRit,
    title: 'RIT Rate My Professors',
    info:
      'An extension for RIT students that shows the Rate My Professors rating of professors while searching classes.',
    info2:
      'I noticed that there exists dozens of Rate My Professor extensions created for colleges by their students but not RIT even though we have so many CS nerds. Despite having already gradauted, I decided to create the best iteration of this extension yet as a thank you to my alma mater.',
    url: 'https://github.com/CalvinWu4/RIT-Rate-My-Professor-Extension',
    repo: 'https://github.com/CalvinWu4/RIT-Rate-My-Professor-Extension', // if no repo, the button will not show up
    achievement: '175+ Users, 250+ Installs, 3000+ Views',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Feel free to email me about job opportunities or ideas.',
  btn: '',
  email: 'calvinwu4@gmail.com',
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};

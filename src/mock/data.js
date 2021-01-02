import { nanoid } from 'nanoid';
import rit from '../images/rit.jpg';
import trinityChurch from '../images/trinity-church.jpg';
import espn from '../images/espn.jpg';
import stuyvesant from '../images/stuyvesant.jpg';
import inDoors from '../images/inDoors.jpg';
import rateMyProfessorRit from '../images/rate-my-professor-rit.png';

// HEAD DATA
export const headData = {
  title: 'Calvin Wu | RIT Grad', // e.g: 'Name | Developer'
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
  paragraphTwo: 'I love books, running, video games (esp. Overwatch), and angsty songs.',
  paragraphThree: `Fun fact: I'm a huge journalism and politics junkie. I live for ideas and debate. I even follow international politics.`,
  resume: 'https://1drv.ms/b/s!AoKuSnGKEVCrhPwEG8aBxPOhirwYEw', // if no resume, the button will not show up
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
    description:
      '',
  },
  {
    id: nanoid(),
    img: espn,
    organization: 'ESPN (Disney DTCI)',
    title: 'Software Engineer Intern',
    location: 'Bristol, Connecticut',
    url: 'https://www.espn.com/',
    date: 'Sept 2019 - Dec 2019',
    color: '#CD242E',
    description:
      '',
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
    description:
      '',
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
    description:
      '',
  },
];

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: inDoors,
    title: 'inDoors',
    info: '',
    info2:
      '',
    url: 'https://chrome.google.com/webstore/detail/indoors-show-glassdoor-ra/eapcedpgnlmgkigiieacngkpdjikfgci?hl=en&authuser=0',
    repo: 'https://github.com/CalvinWu4/inDoors', // if no repo, the button will not show up
    achievement: '350+ Users, 500+ Installs, 1500+ Views',
  },
  {
    id: nanoid(),
    img: rateMyProfessorRit,
    title: 'RIT Rate My Professors',
    info:
      '',
    info2:
      '',
    url: 'https://chrome.google.com/webstore/detail/rate-my-professors-for-ri/lcionigofpcbfpmnipnioapimoggnbda?hl=en&authuser=0',
    repo: 'https://github.com/CalvinWu4/RIT-Rate-My-Professor-Extension', // if no repo, the button will not show up
    achievement: '150+ Users, 250+ Installs, 3000+ Views',
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

import { FaJava, FaNodeJs, FaReact } from 'react-icons/fa';
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiNextdotjs,
  SiReactquery,
  SiRedux,
  SiTypescript,
} from 'react-icons/si';

export const experienceData = [
  {
    company: 'Publicis Sapient',
    role: 'Senior Experience Engineer',
    date: 'March 2024 - Present',
    description:
      'A leading digital transformation consultancy where I architect enterprise-scale solutions for Fortune 500 clients.',
    screenshot: '/screenshots/publicis-sapient.jpg', // Add your screenshot here
    link: 'https://www.publicissapient.com/',
    contributions: [
      'Remediated critical security vulnerabilities, decreasing attack surface by 25%',
      'Integrated SSO and role-based access control for 10,000+ external users',
      'Led end-to-end delivery of Account Manager micro-frontend within 1 month',
      'Improved performance and SEO by 25% through NextJs SSR/SSG optimization',
      'Resolved frontend-blocking issues, reducing integration delays by 20%',
    ],
    stack: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'React', icon: FaReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'TanStack Query', icon: SiReactquery },
      { name: 'Redux', icon: SiRedux },
      { name: 'Java', icon: FaJava },
    ],
  },
  {
    company: 'Practice by Numbers',
    role: 'Software Engineer',
    date: 'March 2023 - January 2024',
    description:
      'A healthcare technology startup focused on improving patient engagement and practice management solutions.',
    screenshot: '/screenshots/practice-by-numbers.jpg', // Add your screenshot here
    link: 'https://practicenumbers.com/',
    contributions: [
      'Resolved high-impact production issues through rapid hotfixes',
      'Led development of Patient Portal for 100,000+ potential users',
      'Boosted web-app performance by 50% through code optimization',
      'Integrated Google Translate APIs, increasing global accessibility by 23%',
      'Reduced production bugs by 30% via code reviews and best practices',
      'Mentored 2 junior developers and trained 3 interns',
    ],
    stack: [
      { name: 'React', icon: FaReact },
      { name: 'Redux', icon: SiRedux },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Node.js', icon: FaNodeJs },
    ],
  },
  {
    company: 'Rapipay Fintech',
    role: 'Software Engineer (Full-Stack)',
    date: 'July 2020 - March 2023',
    description:
      'A fintech company providing digital payment solutions and financial services across India.',
    screenshot: '/screenshots/rapipay-fintech.jpg', // Add your screenshot here
    link: 'https://rapipay.com/',
    contributions: [
      'Integrated Firebase Cloud Messaging, increasing agent engagement by 20%',
      'Developed Payment Gateway Integration API handling 10,000+ RPM',
      'Reduced transaction processing latency by 10% using MERN stack',
      'Introduced Git-based workflows for 100+ shared components',
      'Delivered 1,000+ bug fixes and managed Agent Portal components',
      'Mentored 3 team members, accelerating their technical growth',
    ],
    stack: [
      { name: 'React', icon: FaReact },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express', icon: SiExpress },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'Java', icon: FaJava },
    ],
  },
];

import { FaReact, FaNodeJs, FaJava } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiSpringboot } from 'react-icons/si';

export const experienceData = [
  {
    company: 'Tech Solutions Inc.',
    role: 'Senior Frontend Engineer',
    date: '2021 - Present',
    description:
      'Led the development of a high-traffic e-commerce platform using Next.js and TypeScript, resulting in a 30% increase in performance and a 20% reduction in bounce rate. Collaborated with cross-functional teams to deliver new features and improve user experience.',
    stack: [
      { name: 'React', icon: FaReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Node.js', icon: FaNodeJs },
    ],
  },
  {
    company: 'Creative Agency LLC',
    role: 'Frontend Developer',
    date: '2019 - 2021',
    description:
      'Developed and maintained client websites using React, resulting in a 25% increase in user engagement. Worked closely with designers to implement pixel-perfect user interfaces and ensure cross-browser compatibility.',
    stack: [
      { name: 'React', icon: FaReact },
      { name: 'JavaScript', icon: SiTypescript },
    ],
  },
  {
    company: 'Software Co.',
    role: 'Junior Java Developer',
    date: '2018 - 2019',
    description:
      'Contributed to the development of a large-scale enterprise application using Java and Spring Boot. Gained experience in back-end development, database design, and API integration.',
    stack: [
      { name: 'Java', icon: FaJava },
      { name: 'Spring Boot', icon: SiSpringboot },
    ],
  },
];
